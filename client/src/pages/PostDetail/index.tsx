import { HeroSection } from "../../components/HeroSection"
import { MainSection } from "../../components/MainSection"
import { useEffect } from "react"
import { scrollToTop } from "../../utils/window"

export function PostDetail() {
  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <>
      <HeroSection />
      <MainSection primary />
    </>
  )
}
