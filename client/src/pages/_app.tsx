import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import { type AppType } from "next/app"
import { useState } from "react"
import { ThemeProvider } from "styled-components"
import { MainNavigation } from "../components/MainNavigation"
import { AuthProvider } from "../context/Auth"
import { GlobalStyles } from "../global/styles/GlobalStyle"
import { theme } from "../global/theme"
import "react-quill/dist/quill.snow.css"

const MyApp: AppType = ({ Component, pageProps }) => {
  const [queryClient] = useState(
    new QueryClient({
      logger: {
        log: () => {},
        warn: () => {},
        error: () => {},
      },
    })
  )

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <MainNavigation>
              <Component {...pageProps} />
            </MainNavigation>
          </AuthProvider>
          <GlobalStyles />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
