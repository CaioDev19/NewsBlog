import { useQuery } from "@tanstack/react-query"
import { listCategories } from "../../../services/requests"

export function useCategories() {
  return useQuery(["category"], listCategories, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  })
}
