import { trpc } from "../../../config/trpc"

export function useCategories() {
  return trpc.category.list.useQuery(undefined, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  })
}
