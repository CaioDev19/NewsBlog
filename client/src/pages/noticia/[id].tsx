import { HeroSection } from "../../components/Sections/HeroSection"
import { MainSection } from "../../components/Sections/MainSection"
import { NextPage } from "next"

const PostDetail: NextPage = () => {
  return (
    <>
      <HeroSection />
      <MainSection primary />
    </>
  )
}

export default PostDetail
