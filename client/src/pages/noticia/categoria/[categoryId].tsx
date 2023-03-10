import { News } from "../../../components/News"
import * as Sc from "../../../styles/PostByCategory"
import { HeroSection } from "../../../components/Sections/HeroSection"
import { useRouter } from "next/router"
import { NextPage } from "next"

const PostsByCategory: NextPage = () => {
  const {
    query: { categoryId },
  } = useRouter()

  return (
    <>
      <HeroSection />
      <Sc.Container>
        <News categoryId={categoryId as string} size="lrg" />
      </Sc.Container>
    </>
  )
}

export default PostsByCategory
