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
        description="O Portal Mais Bonfim nasce com a responsabilidade e o comprometimento de levar a informação verdadeira a todos que buscam seriedade e a livre opinião de pensamento."
      />
      <HeroSection />
      <Sc.Container>
        <News categoryId={categoryId} size="lrg" />
      </Sc.Container>
    </>
  )
}
