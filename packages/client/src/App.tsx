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
import { trpc } from "./config/trpc"
import { httpBatchLink } from "@trpc/client"

export function App() {
  const [queryClient] = useState(() => {
    return new QueryClient({
      /*   logger: {
        log: () => {},
        warn: () => {},
        error: () => {},
      }, */
    })
  })
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:4000/trpc",
        }),
      ],
    })
  )

  return (
    <HelmetProvider>
      <Router>
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <AuthProvider>
                <MainRoutes />
              </AuthProvider>
              <GlobalStyles />
            </ThemeProvider>
            <ReactQueryDevtools />
          </QueryClientProvider>
        </trpc.Provider>
      </Router>
    </HelmetProvider>
  )
}
