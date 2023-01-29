import { useParams } from "react-router-dom"
import { useNew } from "../../../hooks/react-query/query/useNew"
import { News } from "../../News"
import { New } from "../../News/New"
import * as Sc from "./style"
import { CardSkeleton } from "../../Skeletons/CardSkeleton"
import { Error } from "../../Error"
import { useEffect, useRef } from "react"
import { Ads } from "../../Ads"

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

  useEffect(() => {
    randomCategory.current = Math.floor(Math.random() * 6)
  }, [id])

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
        {primary ? (
          <News categoryId={randomCategory.current} size="mdn" />
        ) : (
          <Ads />
        )}
      </Sc.AdContainer>
    </Sc.MainContainer>
  )
}
