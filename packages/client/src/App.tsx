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
import { HelmetProvider } from "react-helmet-async"
import { useState } from "react"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

export function App() {
  const [queryClient] = useState(() => {
    return new QueryClient({
      logger: {
        log: () => {},
        warn: () => {},
        error: () => {},
      },
    })
  })

  return (
    <HelmetProvider>
      <Router>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <AuthProvider>
              <MainRoutes />
            </AuthProvider>
            <GlobalStyles />
          </ThemeProvider>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </Router>
    </HelmetProvider>
  )
}
