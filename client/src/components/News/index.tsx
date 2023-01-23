import * as Sc from "./style"
import { New } from "./New"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import { usePaginatedNews } from "../../hooks/react-query/query/usePaginatedNews"
import { useRef } from "react"
import { NewsSkeleton } from "../Skeletons/NewsSkeleton"
import { Error } from "../Error"
import { Size } from "../../interfaces/component"

interface Props {
  size?: Size
  category?: string | number
}

export function News({ size, category }: Props) {
  const newsRef = useRef<HTMLDivElement>(null)
  const limit = size === "lrg" ? 5 : 3
  const {
    data: news,
    isLoading,
    isError,
    currentPage,
    isSuccess,
    fetchNextPage,
    fetchPreviousPage,
  } = usePaginatedNews({
    limit,
    ref: newsRef,
    categoryId: category || undefined,
  })

  if (isError) {
    return <Error message="Não foi possível carregar as notícias" />
  }

  if (news?.data.posts.length === 0) {
    return <Error message=" Nenhuma notícia encontrada" />
  }

  return (
    <Sc.NewsContainer ref={newsRef}>
      {isLoading ? (
        <NewsSkeleton amount={limit} size={size} />
      ) : (
        news?.data.posts.map((newI) => {
          return <New news={newI} size={size} key={newI.id} />
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
