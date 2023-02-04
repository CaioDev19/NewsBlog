import * as Sc from "./style"
import { New } from "./New"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import { usePaginatedNews } from "../../hooks/react-query/query/usePaginatedNews"
import { useEffect, useRef, useState } from "react"
import { NewsSkeleton } from "../Skeletons/NewsSkeleton"
import { Error } from "../Error"
import { Size } from "../../interfaces/component"
import { Article } from "../../interfaces/api"
import { randomize as randomizeFunc } from "../../utils/array"
import { useParams } from "react-router-dom"

interface Props {
  size?: Size
  categoryId?: string | number
  randomize?: boolean
}

export function News({ size, categoryId, randomize }: Props) {
  const newsRef = useRef<HTMLDivElement>(null)
  const { id: idUrl } = useParams()
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
    limit: randomize ? 50 : limit,
    ref: newsRef,
    categoryId: categoryId || undefined,
  })
  const [shuffledNews, setShuffledNews] = useState<Article[] | null>()

  useEffect(() => {
    if (!isSuccess || isLoading || !randomize) return
    setShuffledNews(randomizeFunc(news?.data.posts))
  }, [isSuccess, isLoading, news, randomize, idUrl])

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
      ) : randomize ? (
        shuffledNews?.map((newI, i) => {
          if (i > 2) return null
          return (
            <New
              news={newI}
              size={size}
              key={newI.id}
              variant={size === "sml" ? "light" : "dark"}
            />
          )
        })
      ) : (
        news?.data.posts.map((newI) => {
          return (
            <New
              news={newI}
              size={size}
              key={newI.id}
              variant={size === "sml" ? "light" : "dark"}
            />
          )
        })
      )}
      {size === "lrg" && (
        <Sc.ArrowsContainer>
          <Sc.Arrow onClick={fetchPreviousPage}>
            {currentPage > 1 && <FaArrowLeft />}
          </Sc.Arrow>
          <Sc.Arrow onClick={fetchNextPage}>
            {isSuccess &&
              currentPage < news.data.totalPages &&
              news.data.totalPages > 0 && <FaArrowRight />}
          </Sc.Arrow>
        </Sc.ArrowsContainer>
      )}
    </Sc.NewsContainer>
  )
}
