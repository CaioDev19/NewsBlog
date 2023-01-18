import { scrollToRef } from "../../../utils/window"
import { useQuery } from "@tanstack/react-query"
import { RefObject, useEffect, useState } from "react"
import { getNews, getNewByCategory } from "../../../services/requests"

interface Props {
  initialPage?: number
  limit?: number
  enabled?: boolean
  ref?: RefObject<HTMLDivElement>
  category?: string
}
export function usePaginatedNews({
  initialPage = 1,
  limit = 5,
  enabled = true,
  ref,
  category,
}: Props) {
  const [page, setPage] = useState(initialPage)

  const queryKey = category
    ? ["news", page, limit, category]
    : ["news", page, limit]

  const queryFn = category ? getNewByCategory : getNews

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
    if (category) {
      setPage(1)
    }
  }, [category])

  return {
    ...query,
    currentPage: page,
    fetchNextPage,
    fetchPreviousPage,
  }
}
