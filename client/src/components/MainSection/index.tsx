import { useParams } from "react-router-dom"
import { usePaginatedNews } from "../../hooks/usePaginatedNews"
import { News } from "../News"
import { New } from "../News/New"
import * as Sc from "./style"
import { CardSkeleton } from "../CardSkeleton"

export function MainSection({ primary }: { primary?: boolean }) {
  const { id } = useParams()
  const options = primary ? { id: id } : { enabled: false }
  const { data: news, isLoading } = usePaginatedNews(options)

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
        <Sc.Ad
          src={
            primary
              ? news?.data.articles[0].urlToImage
              : news?.data.articles[3].urlToImage
          }
        />
        <Sc.Ad
          src={
            primary
              ? news?.data.articles[0].urlToImage
              : news?.data.articles[2].urlToImage
          }
        />
        <Sc.Ad
          src={
            primary
              ? news?.data.articles[0].urlToImage
              : news?.data.articles[1].urlToImage
          }
        />
      </Sc.AddContainer>
    </Sc.MainContainer>
  )
}
