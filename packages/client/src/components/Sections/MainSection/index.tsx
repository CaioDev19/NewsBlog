import { useParams } from "react-router-dom"
import { useNew } from "../../../hooks/react-query/query/useNew"
import { News } from "../../News"
import { New } from "../../News/New"
import * as Sc from "./style"
import { CardSkeleton } from "../../Skeletons/CardSkeleton"
import { Error } from "../../Error"
import { Ads } from "../../Ads"
import { Seo } from "../../Seo"
import { limitMetaTagsLength } from "../../../utils/limitMetaTags"

export function MainSection({ primary }: { primary?: boolean }) {
  const { id } = useParams()
  const {
    data: news,
    isLoading,
    isError,
    isSuccess,
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
          <New news={news!} primary />
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

        {primary && isSuccess ? (
          <Seo
            title={`Portal Mais Bonfim - ${limitMetaTagsLength(
              news.title
            )}`}
            description={news.summary}
          />
        ) : (
          <Seo
            title="Portal Mais Bonfim - Home"
            description="O Portal Mais Bonfim nasce com a responsabilidade e o comprometimento de levar a informação verdadeira a todos que buscam seriedade e a livre opinião de pensamento."
          />
        )}
      </Sc.AdContainer>
    </Sc.MainContainer>
  )
}
