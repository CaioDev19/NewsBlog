import { ThemeProvider } from "styled-components"
import { theme } from "./global/theme"
import { GlobalStyles } from "./global/styles/GlobalStyle"
import { BrowserRouter as Router } from "react-router-dom"
import { MainRoutes } from "./routes"

export function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <MainRoutes />
        <GlobalStyles />
      </ThemeProvider>
    </Router>
  )
}
