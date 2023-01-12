import { ThemeProvider } from "styled-components"
import { theme } from "./global/theme"
import { GlobalStyles } from "./global/styles/GlobalStyle"
import { Header } from "./components/Header"
import { HeroSection } from "./components/HeroSection"

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <HeroSection />
      <GlobalStyles />
    </ThemeProvider>
  )
}
