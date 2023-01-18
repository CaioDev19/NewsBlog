import { useParams } from "react-router-dom"
import { useNew } from "../../../hooks/react-query/query/useNew"
import { News } from "../../News"
import { New } from "../../News/New"
import * as Sc from "./style"
import { CardSkeleton } from "../../Skeletons/CardSkeleton"
import { usePaginatedNews } from "../../../hooks/react-query/query/usePaginatedNews"

export function MainSection({ primary }: { primary?: boolean }) {
  const { id } = useParams()
  const { data: news, isLoading } = useNew({
    id: id || "1",
    enabled: primary || false,
  })
  const { data: paginatedNews } = usePaginatedNews({
    limit: 3,
    initialPage: 10,
  })

  return (
    <Sc.MainContainer as="section">
      {primary ? (
        isLoading ? (
          <CardSkeleton />
        ) : (
          <New news={news?.data.articles?.[0]!} primary />
        )
      ) : (
        <News size="lrg" />
      )}
      <Sc.AddContainer>
        <Sc.SubTittle
          type="title"
          as="h2"
          weight="str"
          position="left"
        >
          mais notícias
        </Sc.SubTittle>
        <Sc.Ad src={paginatedNews?.data.articles[0]?.urlToImage} />
        <Sc.Ad src={paginatedNews?.data.articles[1]?.urlToImage} />
        <Sc.Ad src={paginatedNews?.data.articles[2]?.urlToImage} />
      </Sc.AddContainer>
    </Sc.MainContainer>
  )
}
