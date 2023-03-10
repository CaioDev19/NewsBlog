import { NextPage } from "next"
import { HeroSection } from "../components/Sections/HeroSection"
import { MainSection } from "../components/Sections/MainSection"

const Home: NextPage = () => {
  return (
    <>
      <HeroSection primary />
      <MainSection />
    </>
  )
}

export default Home
