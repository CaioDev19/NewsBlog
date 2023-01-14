import { News } from "../News"
import * as Sc from "./style"

interface Props {
  primary?: boolean
}

export function HeroSection({ primary }: Props) {
  return (
    <Sc.Container>
      <Sc.ContentWrapper>
        <Sc.Banner src="https://via.placeholder.com/1000/#ffff https://placeholder.com/" />
        {primary && (
          <Sc.LowerContent>
            <Sc.LeftContent src="https://via.placeholder.com/500/#ffff https://placeholder.com/" />
            <Sc.RightContent>
              <Sc.Title
                type="title"
                as="h2"
                weight="str"
                position="left"
              >
                Últimas notícias
              </Sc.Title>
              <News />
            </Sc.RightContent>
          </Sc.LowerContent>
        )}
      </Sc.ContentWrapper>
    </Sc.Container>
  )
}
