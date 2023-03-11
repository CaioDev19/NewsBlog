import { News } from "../../News"
import banner from "../../../assets/images/Imagem_do_WhatsApp_de_2023-01-26_à_s__20.09.09-removebg.png"
import church from "../../../assets/images/banner.jpg"
import * as Sc from "./style"
import { AdsCarousel } from "../../AdsCarousel"

interface Props {
  primary?: boolean
}

export function HeroSection({ primary }: Props) {
  return (
    <Sc.Container image={church}>
      <Sc.Overlay />
      <Sc.ContentWrapper>
        <Sc.Banner src={banner} alt="Banner Portal Mais Bonfim" />
        {primary && (
          <Sc.LowerContent>
            <AdsCarousel />
            <Sc.RightContent>
              <Sc.Title
                type="title"
                as="h2"
                weight="str"
                position="left"
                color="gray_100"
              >
                Últimas notícias
              </Sc.Title>
              <News size="sml" />
            </Sc.RightContent>
          </Sc.LowerContent>
        )}
      </Sc.ContentWrapper>
    </Sc.Container>
  )
}
