import { useQuery } from "@tanstack/react-query"
import { RefObject, useCallback, useState } from "react"
import { getAdvertising } from "../../../services/requests"
import { scrollToRef } from "../../../utils/window"

interface Props {
  initialPage?: number
  limit?: number
  enabled?: boolean
  keepPreviousData?: boolean
  ref?: RefObject<HTMLDivElement>
}

export function usePaginatedAds({
  initialPage = 1,
  limit = 5,
  enabled = true,
  ref,
  keepPreviousData = false,
}: Props) {
  const [page, setPage] = useState(() => initialPage)

  const query = useQuery(
    ["advertising", page, limit],
    getAdvertising,
    {
      enabled,
      keepPreviousData,
    }
  )

  const fetchNextPage = useCallback(() => {
    scrollToRef(ref)
    setPage((old) => old + 1)
  }, [ref])

  const fetchPreviousPage = useCallback(() => {
    scrollToRef(ref)
    setPage((old) => old - 1)
  }, [ref])

  return {
    ...query,
    currentPage: page,
    fetchNextPage,
    fetchPreviousPage,
    goToPage: setPage,
  }
}
