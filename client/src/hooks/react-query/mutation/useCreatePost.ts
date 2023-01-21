import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { createNew } from "../../../services/requests"

export function useCreatePost() {
  const navigate = useNavigate()
  return useMutation(createNew, {
    onSuccess: () => {
      navigate("/")
    },
  })
}
