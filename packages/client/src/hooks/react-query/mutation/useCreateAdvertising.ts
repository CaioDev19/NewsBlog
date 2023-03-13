import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useEffect } from "react"
import { trpc } from "../../../config/trpc"
import { createAdvertising } from "../../../services/requests"
import { useSignOutOnError } from "../../useSignOutOnError"

export function useCreateAdvertising() {
  const utils = trpc.useContext()
  const [setShouldSignOut] = useSignOutOnError()
  const mutation = useMutation(createAdvertising, {
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
