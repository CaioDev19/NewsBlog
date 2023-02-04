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
  keepPreviousData?: boolean
}
export function usePaginatedNews({
  initialPage = 1,
  limit = 5,
  enabled = true,
  ref,
  categoryId,
  keepPreviousData = false,
}: Props) {
  const [page, setPage] = useState(() => initialPage)

  const queryKey =
    typeof categoryId !== "undefined"
      ? ["news", page, limit, categoryId]
      : ["news", page, limit]

  const queryFn = categoryId ? getNewByCategory : getNews

  const query = useQuery(queryKey, queryFn, {
    enabled,
    keepPreviousData,
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
