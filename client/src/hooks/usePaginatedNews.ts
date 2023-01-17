import { scrollToRef } from "../utils/window"
import { useQuery } from "@tanstack/react-query"
import { RefObject, useState } from "react"
import { getNews, getNew } from "../services/requests"

interface Props {
  id?: string
  initialPage?: number
  limit?: number
  enabled?: boolean
  ref?: RefObject<HTMLDivElement>
}
export function usePaginatedNews({
  initialPage = 1,
  limit = 5,
  enabled,
  ref,
  id,
}: Props) {
  const [page, setPage] = useState(initialPage)

  const queryKey = id ? ["news", id] : ["news", page, limit]
  const queryFunction = id ? getNew : getNews

  const query = useQuery(queryKey, queryFunction, {
    enabled,
    keepPreviousData: true,
  })

  function fetchNextPage() {
    scrollToRef(ref)
    setPage((old) => old + 1)
  }

  function fetchPreviousPage() {
    if (page === 1) return
    scrollToRef(ref)
    setPage((old) => old - 1)
  }

  return {
    ...query,
    currentPage: page,
    fetchNextPage,
    fetchPreviousPage,
  }
}
