import { useMutation } from "@tanstack/react-query"
import { useQueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useEffect } from "react"
import { createAdvertising } from "../../../services/requests"
import { useSignOutOnError } from "../../useSignOutOnError"

export function useCreateAdvertising() {
  const queryClient = useQueryClient()
  const [setShouldSignOut] = useSignOutOnError()
  const mutation = useMutation(createAdvertising, {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["advertising"],
      })
    },
    onError: (_error: AxiosError) => {},
  })

  useEffect(() => {
    if (
      mutation.isError &&
      mutation.error?.response?.status === 401
    ) {
      setShouldSignOut(true)
    }
  }, [
    mutation.isError,
    setShouldSignOut,
    mutation.error?.response?.status,
  ])

  return mutation
}
