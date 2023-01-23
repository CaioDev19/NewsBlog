import { useParams } from "react-router-dom"
import { useNew } from "../../../hooks/react-query/query/useNew"
import { News } from "../../News"
import { New } from "../../News/New"
import * as Sc from "./style"
import { CardSkeleton } from "../../Skeletons/CardSkeleton"
import { usePaginatedNews } from "../../../hooks/react-query/query/usePaginatedNews"
import { Error } from "../../Error"
import { useRef } from "react"

export function MainSection({ primary }: { primary?: boolean }) {
  const { id } = useParams()
  const {
    data: news,
    isLoading,
    isError,
  } = useNew({
    id: id || "1",
    enabled: primary || false,
  })
  const randomCategory = useRef(Math.floor(Math.random() * 6))
  const { data: randomNews, isError: isRandomError } =
    usePaginatedNews({
      limit: 3,
      initialPage: 1,
      categoryId: randomCategory.current,
    })

  if ((primary && isError) || isRandomError) {
    return <Error message="Não foi possível carregar a notícia" />
  }

  return (
    <Sc.MainContainer as="section">
      {primary ? (
        isLoading ? (
          <CardSkeleton />
        ) : (
          <New news={news?.data!} primary />
        )
      ) : (
        <News size="lrg" />
      )}
      <Sc.AdContainer>
        <Sc.SubTittle
          type="title"
          as="h2"
          weight="str"
          position="left"
        >
          {primary ? "Mais notícias" : "Patrocinadores"}
        </Sc.SubTittle>
        {primary ? (
          <News category={randomCategory.current} size="mdn" />
        ) : (
          <>
            <Sc.Ad src={randomNews?.data.posts[0]?.image.url} />
            <Sc.Ad src={randomNews?.data.posts[1]?.image.url} />
            <Sc.Ad src={randomNews?.data.posts[2]?.image.url} />
          </>
        )}
      </Sc.AdContainer>
    </Sc.MainContainer>
  )
}
