import { useParams } from "react-router-dom"
import { usePaginatedNews } from "../../hooks/usePaginatedNews"
import { News } from "../News"
import { New } from "../News/New"
import { News as INews } from "../../interfaces/api"
import * as Sc from "./style"

export function MainSection({ primary }: { primary?: boolean }) {
  const { id } = useParams()
  const options = primary ? { id: id } : { enabled: false }
  const { data: news, isSuccess } = usePaginatedNews(options)

  return (
    <Sc.MainContainer as="section">
      {primary ? (
        isSuccess && <New news={news.data as INews} primary />
      ) : (
        <News size="lrg" />
      )}
      <Sc.AddContainer>
        <Sc.Ad src="https://via.placeholder.com/500/#ffff https://placeholder.com/" />
        <Sc.Ad src="https://via.placeholder.com/500/#ffff https://placeholder.com/" />
        <Sc.Ad src="https://via.placeholder.com/500/#ffff https://placeholder.com/" />
      </Sc.AddContainer>
    </Sc.MainContainer>
  )
}
