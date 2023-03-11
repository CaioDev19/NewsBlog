import { MainNavigation } from "../../components/MainNavigation"
import { HeroSection } from "../../components/Sections/HeroSection"
import { MainSection } from "../../components/Sections/MainSection"
import { NextPageWithLayout } from "../_app"

const PostDetail: NextPageWithLayout = () => {
  return (
    <>
      <HeroSection />
      <MainSection primary />
    </>
  )
}

PostDetail.getLayout = (page) => {
  return <MainNavigation>{page}</MainNavigation>
}

export default PostDetail
