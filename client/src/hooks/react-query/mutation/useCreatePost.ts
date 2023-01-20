import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { createPost } from "../../../services/requests"

export function useCreatePost() {
  const navigate = useNavigate()
  return useMutation(createPost, {
    onSuccess: () => {
      navigate("/")
    },
  })
}
