import { scrollToRef } from "../../../utils/window"
import { useQuery } from "@tanstack/react-query"
import { RefObject, useEffect, useState } from "react"
import { getNews, getNewByCategory } from "../../../services/requests"

interface Props {
  initialPage?: number
  limit?: number
  enabled?: boolean
  ref?: RefObject<HTMLDivElement>
  categoryId?: string
}
export function usePaginatedNews({
  initialPage = 1,
  limit = 5,
  enabled = true,
  ref,
  categoryId,
}: Props) {
  const [page, setPage] = useState(initialPage)

  const queryKey = categoryId
    ? ["news", page, limit, categoryId]
    : ["news", page, limit]

  const queryFn = categoryId ? getNewByCategory : getNews

  const query = useQuery(queryKey, queryFn, {
    enabled,
    keepPreviousData: true,
  })

  function fetchNextPage() {
    scrollToRef(ref)
    setPage((old) => old + 1)
  }

  function fetchPreviousPage() {
    scrollToRef(ref)
    setPage((old) => old - 1)
  }

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
  }
}
