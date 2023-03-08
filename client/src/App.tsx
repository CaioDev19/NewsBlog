import { ThemeProvider } from "styled-components"
import { theme } from "./global/theme"
import { GlobalStyles } from "./global/styles/GlobalStyle"
import { BrowserRouter as Router } from "react-router-dom"
import { MainRoutes } from "./routes"
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import { AuthProvider } from "./context/Auth"

const queryClient = new QueryClient({
  logger: {
    log: () => {},
    warn: () => {},
    error: () => {},
  },
})

export function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <MainRoutes />
          </AuthProvider>
          <GlobalStyles />
        </ThemeProvider>
      </QueryClientProvider>
    </Router>
  )
}
