import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { createNew } from "../../../services/requests"
import { useQueryClient } from "@tanstack/react-query"

export function useCreatePost() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  return useMutation(createNew, {
    onSuccess: () => {
      queryClient.invalidateQueries(["news", 1, 5])
      queryClient.invalidateQueries(["news", 1, 3])
      navigate("/")
    },
  })
}
