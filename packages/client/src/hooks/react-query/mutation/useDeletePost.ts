import { useMutation } from "@tanstack/react-query"
import { deleteNew } from "../../../services/requests"
import { AxiosError } from "axios"
import { useSignOutOnError } from "../../useSignOutOnError"
import { useEffect } from "react"
import { trpc } from "../../../config/trpc"

export function useDeletePost() {
  const utils = trpc.useContext()
  const [setShouldSignOut] = useSignOutOnError()
  const mutation = useMutation(deleteNew, {
    onSuccess: async () => {
      await utils.post.invalidate()
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
