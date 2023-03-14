import { News } from "../../News"
import banner from "../../../assets/images/portal mais bonfim 2.png"
import mobileBanner from "../../../assets/images/banner portal mais bonfim 1.png"
import church from "../../../assets/images/banner.jpg"
import * as Sc from "./style"
import { AdsCarousel } from "../../AdsCarousel"
import { useTheme } from "styled-components"
import { useWindow } from "../../../hooks/useWindow"

interface Props {
  primary?: boolean
}

export function HeroSection({ primary }: Props) {
  const theme = useTheme()
  const { width } = useWindow()

  return (
    <Sc.Container image={church}>
      <Sc.Overlay />
      <Sc.ContentWrapper>
        <Sc.Banner
          src={
            width! > theme.BREAKPOINTS.mobile ? banner : mobileBanner
          }
          alt="Banner Portal Mais Bonfim"
        />
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
