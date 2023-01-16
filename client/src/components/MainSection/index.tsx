import { useParams } from "react-router-dom"
import { usePaginatedNews } from "../../hooks/usePaginatedNews"
import { News } from "../News"
import { New } from "../News/New"
import { News as INews } from "../../interfaces/api"
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
          <New news={news?.data as INews} primary />
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
        <Sc.Ad src="https://via.placeholder.com/500/#ffff https://placeholder.com/" />
        <Sc.Ad src="https://via.placeholder.com/500/#ffff https://placeholder.com/" />
        <Sc.Ad src="https://via.placeholder.com/500/#ffff https://placeholder.com/" />
      </Sc.AddContainer>
    </Sc.MainContainer>
  )
}
