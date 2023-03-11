import { News } from "../../../components/News"
import * as Sc from "../../../styles/PostByCategory"
import { HeroSection } from "../../../components/Sections/HeroSection"
import { useRouter } from "next/router"
import { NextPageWithLayout } from "../../_app"
import { MainNavigation } from "../../../components/MainNavigation"

const PostsByCategory: NextPageWithLayout = () => {
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

PostsByCategory.getLayout = (page) => {
  return <MainNavigation>{page}</MainNavigation>
}

export default PostsByCategory
