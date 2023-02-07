import * as Sc from "./style"
import image from "../../assets/images/joanImage.jpg"
import { Text } from "../../global/styles/Typography"

export function AboutUs() {
  return (
    <Sc.Container>
      <Sc.Image src={image} />
      <Sc.RightContent>
        <Text
          type="paragraph"
          as="p"
          position="justify"
          size="lrg"
          color="black_200"
        >
          Nascido em Custódia PE em 05 de abril de 1974 , radialista
          desde os 17 anos , com passagens por emissoras do interior
          da Bahia e Pernambuco , atualmente faz parte da Rainha FM de
          Senhor do Bonfim.
        </Text>
        <Text
          type="title"
          as="h1"
          weight="str"
          size="exl"
          position="left"
        >
          Joan Márton Bernardo Lopes
        </Text>
        <Text
          type="title"
          as="span"
          weight="wek"
          size="lrg"
          position="left"
          color="gray_200"
        >
          Radialista
        </Text>
      </Sc.RightContent>
    </Sc.Container>
  )
}
