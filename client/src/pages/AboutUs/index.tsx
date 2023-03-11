import * as Sc from "./style"
import image from "../../assets/images/joanImage.jpg"
import { Text } from "../../global/styles/Typography"
import { useTheme } from "styled-components"
import { useWindow } from "../../hooks/useWindow"
import { Seo } from "../../components/Seo"

export function AboutUs() {
  const theme = useTheme()
  const { width } = useWindow()

  return (
    <Sc.Container>
      <Seo
        title="Portal Mais Bonfim - Sobre nós"
        description="Conheça o Portal Mais Bonfim, comprometido em fornecer informações precisas e opiniões livres de preconceitos. Saiba mais sobre nossa missão de levar a verdadeira informação a todos que buscam seriedade e transparência."
      />
      <Sc.Image src={image} />
      <Sc.RightContent>
        <Text
          type="title"
          as="h1"
          weight="str"
          size="exl"
          position="left"
        >
          Joan Lopes
        </Text>
        <Text
          type="title"
          as="span"
          weight="wek"
          size={width! > theme.BREAKPOINTS.mobile ? "lrg" : "rgl"}
          position="left"
          color="gray_200"
        >
          Radialista
        </Text>
        <Text
          type="paragraph"
          as="p"
          position="justify"
          size="lrg"
          color="black_200"
        >
          Nascido em Custódia-PE em 05 de abril de 1974, radialista
          desde os 17 anos, com passagens por emissoras do interior da
          Bahia e Pernambuco. Atualmente faz parte da Rainha FM de
          Senhor do Bonfim sendo o idealizador do Portal mais Bonfim,
          que tem por objetivo potencializar as informações de maneira
          rápida, clara e verdadeira respeitando a sua livre expressã
          de pensamento.
        </Text>
      </Sc.RightContent>
    </Sc.Container>
  )
}
