import { scrollToRef } from "../../../utils/window"
import { useQuery } from "@tanstack/react-query"
import { RefObject, useCallback, useEffect, useState } from "react"
import { getNews, getNewByCategory } from "../../../services/requests"

interface Props {
  initialPage?: number
  limit?: number
  enabled?: boolean
  ref?: RefObject<HTMLDivElement>
  categoryId?: string | number
}
export function usePaginatedNews({
  initialPage = 1,
  limit = 5,
  enabled = true,
  ref,
  categoryId,
}: Props) {
  const [page, setPage] = useState(() => initialPage)

  const queryKey = categoryId
    ? ["news", page, limit, categoryId]
    : ["news", page, limit]

  const queryFn = categoryId ? getNewByCategory : getNews

  const query = useQuery(queryKey, queryFn, {
    enabled,
    keepPreviousData: true,
  })

  const fetchNextPage = useCallback(() => {
    scrollToRef(ref)
    setPage((old) => old + 1)
  }, [ref])

  const fetchPreviousPage = useCallback(() => {
    scrollToRef(ref)
    setPage((old) => old - 1)
  }, [ref])

  useEffect(() => {
    if (categoryId) {
      setPage(1)
    }
  }, [categoryId])

  return {
    ...query,
    currentPage: page,
    fetchNextPage,
    fetchPreviousPage,
    goToPage: setPage,
  }
}
