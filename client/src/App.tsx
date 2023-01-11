import { ThemeProvider } from "styled-components"
import { theme } from "./global/theme"
import { GlobalStyles } from "./global/styles/GlobalStyle"
import { Header } from "./components/Header"

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <GlobalStyles />
    </ThemeProvider>
  )
}
