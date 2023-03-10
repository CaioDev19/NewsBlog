import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import { type AppType } from "next/app"
import Head from "next/head"
import { useState } from "react"
import { ThemeProvider } from "styled-components"
import { MainNavigation } from "../components/MainNavigation"
import { AuthProvider } from "../context/Auth"
import { GlobalStyles } from "../global/styles/GlobalStyle"
import { theme } from "../global/theme"

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
      <Head>
        <title>Portal Mais Bonfim</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
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
