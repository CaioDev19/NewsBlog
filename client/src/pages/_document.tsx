import { Html, Head } from "next/document"

export default function Document() {
  return (
    <Html lang="pt-br" translate="no">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="O Portal Mais Bonfim nasce com a responsabilidade e o comprometimento de levar a informação verdadeira a todos que buscam seriedade e a livre opinião de pensamento."
        />
        <meta name="google" content="notranslate" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        />
        <link
          rel="apple-touch-icon"
          href="%PUBLIC_URL%/logo192.png"
        />
        <title>Portal Mais Bonfim</title>
      </Head>
    </Html>
  )
}
