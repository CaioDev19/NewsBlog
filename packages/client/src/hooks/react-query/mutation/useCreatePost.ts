import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { createNew } from "../../../services/requests"
import { useSignOutOnError } from "../../useSignOutOnError"
import { useEffect } from "react"
import { AxiosError } from "axios"
import { trpc } from "../../../config/trpc"

export function useCreatePost() {
  const navigate = useNavigate()
  const [setShouldSignOut] = useSignOutOnError()
  const utils = trpc.useContext()
  const mutation = useMutation(createNew, {
    onSuccess: async () => {
      await utils.post.invalidate()
      navigate("/")
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
