import { useParams } from "react-router-dom"
import { News } from "../../components/News"
import * as Sc from "./style"
import { HeroSection } from "../../components/Sections/HeroSection"

export function PostsByCategory() {
  const { categoryId } = useParams()

  return (
    <>
      <HeroSection />
      <Sc.Container>
        <News category={categoryId} size="lrg" />
      </Sc.Container>
    </>
  )
}
