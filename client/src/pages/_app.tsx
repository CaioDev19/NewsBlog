import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import { AppProps } from "next/app"
import { ReactElement, ReactNode, useState } from "react"
import { ThemeProvider } from "styled-components"
import { AuthProvider } from "../context/Auth"
import { GlobalStyles } from "../global/styles/GlobalStyle"
import { theme } from "../global/theme"
import "react-quill/dist/quill.snow.css"
import { NextPage } from "next"
import Head from "next/head"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(
    new QueryClient({
      /*  logger: {
        log: () => {},
        warn: () => {},
        error: () => {},
      }, */
    })
  )

  return (
    <>
      <Head>
        <title>Portal Mais Bonfim</title>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta name="theme-color" content="#000000" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            {Component.getLayout ? (
              Component.getLayout(<Component {...pageProps} />)
            ) : (
              <Component {...pageProps} />
            )}
          </AuthProvider>
          <GlobalStyles />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
