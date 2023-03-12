import { useParams } from "react-router-dom"
import { News } from "../../components/News"
import * as Sc from "./style"
import { HeroSection } from "../../components/Sections/HeroSection"
import { Seo } from "../../components/Seo"

export function PostsByCategory() {
  const { categoryId } = useParams()

  return (
    <>
      <Seo
        title={"Portal Mais Bonfim - Notícias"}
        description="Encontre as notícias mais importantes do dia no nosso site de notícias, com cobertura abrangente de política, entretenimento, esportes e muito mais. Leia as notícias mais recentes e navegue pelas categorias para se manter informado."
      />
      <HeroSection />
      <Sc.Container>
        <News categoryId={categoryId} size="lrg" />
      </Sc.Container>
    </>
  )
}
