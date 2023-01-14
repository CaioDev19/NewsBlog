import { ThemeProvider } from "styled-components"
import { theme } from "./global/theme"
import { GlobalStyles } from "./global/styles/GlobalStyle"
import { BrowserRouter as Router } from "react-router-dom"
import { MainRoutes } from "./routes"
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient()

export function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <MainRoutes />
          <GlobalStyles />
        </ThemeProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Router>
  )
}
