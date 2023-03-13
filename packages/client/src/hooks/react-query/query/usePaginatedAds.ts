import { RefObject, useCallback, useState } from "react"
import { trpc } from "../../../config/trpc"
import { scrollToRef } from "../../../utils/window"

interface Props {
  initialPage?: number
  limit?: number
  enabled?: boolean
  keepPreviousData?: boolean
  ref?: RefObject<HTMLDivElement>
  status?: "Fixo" | "Móvel"
}

export function usePaginatedAds({
  initialPage = 1,
  limit = 5,
  enabled = true,
  ref,
  keepPreviousData = false,
  status,
}: Props) {
  const [page, setPage] = useState(() => initialPage)

  const query = trpc.advertising.list.useQuery(
    { page, limit, status: status },
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
