import { useParams } from "react-router-dom"
import { useNew } from "../../../hooks/react-query/query/useNew"
import { News } from "../../News"
import { New } from "../../News/New"
import * as Sc from "./style"
import { CardSkeleton } from "../../Skeletons/CardSkeleton"
import { Error } from "../../Error"
import { Ads } from "../../Ads"

export function MainSection({ primary }: { primary?: boolean }) {
  const { id } = useParams()
  const {
    data: news,
    isLoading,
    isError,
  } = useNew({
    id: id!,
    enabled: primary || false,
  })

  if (primary && isError) {
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
        {primary ? <News size="mdn" randomize /> : <Ads />}
      </Sc.AdContainer>
    </Sc.MainContainer>
  )
}
