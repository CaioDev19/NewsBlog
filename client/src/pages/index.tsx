import { GetServerSideProps } from "next"
import { MainNavigation } from "../components/MainNavigation"
import { HeroSection } from "../components/Sections/HeroSection"
import { MainSection } from "../components/Sections/MainSection"
import { NextPageWithLayout } from "./_app"
import { parseCookies } from "nookies"

const Home: NextPageWithLayout = () => {
  return (
    <>
      <HeroSection primary />
      <MainSection />
    </>
  )
}

Home.getLayout = (page) => {
  return <MainNavigation>{page}</MainNavigation>
}

export default Home
