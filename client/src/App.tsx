import { ThemeProvider } from "styled-components"
import { theme } from "./global/theme"
import { GlobalStyles } from "./global/styles/GlobalStyle"
import { Header } from "./components/Header"
import { HeroSection } from "./components/HeroSection"
import * as Sc from "./styleApp"
import { MainSection } from "./components/MainSection"
import { Footer } from "./components/Footer"

const a = [
  {
    image:
      "https://via.placeholder.com/500/#ffff https://placeholder.com/",
    title:
      " loren ipsum dolor sit amet consectetur adipisicing elit.",
    date: "30/10/2021",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusamus eligendi, reiciendis, vitae nam amet vero nesciunt quisquam nulla eos aut. Consequuntur doloribus commodi quae architecto at illum ab neque!",
  },
  {
    image:
      "https://via.placeholder.com/500/#ffff https://placeholder.com/",
    title:
      " loren ipsum dolor sit amet consectetur adipisicing elit.",
    date: "30/10/2021",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusamus eligendi, reiciendis, vitae nam amet vero nesciunt quisquam nulla eos aut. Consequuntur doloribus commodi quae architecto at illum ab neque!",
  },
  {
    image:
      "https://via.placeholder.com/500/#ffff https://placeholder.com/",
    title:
      " loren ipsum dolor sit amet consectetur adipisicing elit.",
    date: "30/10/2021",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusamus eligendi, reiciendis, vitae nam amet vero nesciunt quisquam nulla eos aut. Consequuntur doloribus commodi quae architecto at illum ab neque!",
  },
  {
    image:
      "https://via.placeholder.com/500/#ffff https://placeholder.com/",
    title:
      " loren ipsum dolor sit amet consectetur adipisicing elit.",
    date: "30/10/2021",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusamus eligendi, reiciendis, vitae nam amet vero nesciunt quisquam nulla eos aut. Consequuntur doloribus commodi quae architecto at illum ab neque!",
  },
  {
    image:
      "https://via.placeholder.com/500/#ffff https://placeholder.com/",
    title:
      " loren ipsum dolor sit amet consectetur adipisicing elit.",
    date: "30/10/2021",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusamus eligendi, reiciendis, vitae nam amet vero nesciunt quisquam nulla eos aut. Consequuntur doloribus commodi quae architecto at illum ab neque!",
  },
]

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Sc.Container>
        <HeroSection />
        <MainSection />
      </Sc.Container>
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  )
}
