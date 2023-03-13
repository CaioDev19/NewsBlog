import { useMutation } from "@tanstack/react-query"
import { deleteNew } from "../../../services/requests"
import { useQueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useSignOutOnError } from "../../useSignOutOnError"
import { useEffect } from "react"

export function useDeletePost() {
  const queryClient = useQueryClient()
  const [setShouldSignOut] = useSignOutOnError()
  const mutation = useMutation(deleteNew, {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["news"],
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
