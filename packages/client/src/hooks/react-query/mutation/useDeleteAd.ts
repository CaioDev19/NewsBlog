import { useMutation } from "@tanstack/react-query"
import { deleteAdvertising } from "../../../services/requests"
import { AxiosError } from "axios"
import { useSignOutOnError } from "../../useSignOutOnError"
import { useEffect } from "react"
import { trpc } from "../../../config/trpc"

export function useDeleteAd() {
  const utils = trpc.useContext()
  const [setShouldSignOut] = useSignOutOnError()
  const mutation = useMutation(deleteAdvertising, {
    onSuccess: async () => {
      await utils.advertising.invalidate()
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
