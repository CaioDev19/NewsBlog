import { useMutation } from "@tanstack/react-query"
import { deleteAdvertising } from "../../../services/requests"
import { useQueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useSignOutOnError } from "../../useSignOutOnError"
import { useEffect } from "react"

export function useDeleteAd() {
  const queryClient = useQueryClient()
  const [setShouldSignOut] = useSignOutOnError()
  const mutation = useMutation(deleteAdvertising, {
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
