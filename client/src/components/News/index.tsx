import * as Sc from "./style"
import { New } from "./New"
import { News as INews } from "../../interfaces/api"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import { usePaginatedNews } from "../../hooks/usePaginatedNews"
import { useRef } from "react"
import { NewsSkeleton } from "./NewsSkeleton"

interface Props {
  size?: "sml" | "lrg"
}

export function News({ size }: Props) {
  const newsRef = useRef<HTMLDivElement>(null)
  const limit = size === "lrg" ? 5 : 3
  const {
    data,
    isLoading,
    currentPage,
    fetchNextPage,
    fetchPreviousPage,
  } = usePaginatedNews({
    limit,
    ref: newsRef,
  })
  const news = data?.data as INews[]

  return (
    <Sc.NewsContainer ref={newsRef}>
      {isLoading ? (
        <NewsSkeleton amount={limit} size={size} />
      ) : (
        news.map((newI, i: number) => {
          return <New news={newI} size={size} key={i} />
        })
      )}
      {size === "lrg" && (
        <Sc.ArrowsContainer>
          <Sc.Arrow onClick={fetchPreviousPage}>
            {currentPage > 1 && <FaArrowLeft />}
          </Sc.Arrow>
          <Sc.Arrow onClick={fetchNextPage}>
            {currentPage < 5 && <FaArrowRight />}
          </Sc.Arrow>
        </Sc.ArrowsContainer>
      )}
    </Sc.NewsContainer>
  )
}
