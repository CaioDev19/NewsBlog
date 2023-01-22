import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { updateNew } from "../../../services/requests"
import { useQueryClient } from "@tanstack/react-query"
import { useSignOutOnError } from "../../useSignOutOnError"
import { useEffect } from "react"
import { AxiosError } from "axios"

export function useUpdatePost() {
  const navigate = useNavigate()
  const [setShouldSignOut] = useSignOutOnError()
  const queryClient = useQueryClient()
  const mutation = useMutation(updateNew, {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["news"],
      })
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
