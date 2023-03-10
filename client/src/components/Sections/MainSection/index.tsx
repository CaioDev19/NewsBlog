import { useNew } from "../../../hooks/react-query/query/useNew"
import { News } from "../../News"
import { New } from "../../News/New"
import * as Sc from "./style"
import { CardSkeleton } from "../../Skeletons/CardSkeleton"
import { Error } from "../../Error"
import { Ads } from "../../Ads"
import { useRouter } from "next/router"

export function MainSection({ primary }: { primary?: boolean }) {
  const {
    query: { id },
  } = useRouter()
  const {
    data: news,
    isLoading,
    isError,
  } = useNew({
    id: id as string,
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
      <Sc.AdContainer primary={!!primary}>
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
