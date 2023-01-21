import * as Sc from "./style"
import { New } from "./New"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import { usePaginatedNews } from "../../hooks/react-query/query/usePaginatedNews"
import { useRef } from "react"
import { NewsSkeleton } from "../Skeletons/NewsSkeleton"

interface Props {
  size?: "sml" | "lrg"
  category?: string
}

export function News({ size, category }: Props) {
  const newsRef = useRef<HTMLDivElement>(null)
  const limit = size === "lrg" ? 5 : 3
  const {
    data: news,
    isLoading,
    currentPage,
    isSuccess,
    fetchNextPage,
    fetchPreviousPage,
  } = usePaginatedNews({
    limit,
    ref: newsRef,
    categoryId: category,
  })

  return (
    <Sc.NewsContainer ref={newsRef}>
      {isLoading ? (
        <NewsSkeleton amount={limit} size={size} />
      ) : (
        news?.data.posts.map((newI, i: number) => {
          return <New news={newI} size={size} key={i} />
        })
      )}
      {size === "lrg" && (
        <Sc.ArrowsContainer>
          <Sc.Arrow onClick={fetchPreviousPage}>
            {currentPage > 1 && <FaArrowLeft />}
          </Sc.Arrow>
          <Sc.Arrow onClick={fetchNextPage}>
            {currentPage !==
              (isSuccess ? news?.data.totalPages : 1) && (
              <FaArrowRight />
            )}
          </Sc.Arrow>
        </Sc.ArrowsContainer>
      )}
    </Sc.NewsContainer>
  )
}
