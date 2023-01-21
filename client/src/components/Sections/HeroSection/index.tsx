import { usePaginatedNews } from "../../../hooks/react-query/query/usePaginatedNews"
import { News } from "../../News"
import * as Sc from "./style"

interface Props {
  primary?: boolean
}

export function HeroSection({ primary }: Props) {
  const { data } = usePaginatedNews({})

  return (
    <Sc.Container>
      <Sc.ContentWrapper>
        <Sc.Banner src="https://via.placeholder.com/1000/#ffff https://placeholder.com/" />
        {primary && (
          <Sc.LowerContent>
            <Sc.LeftContent src={data?.data.posts?.[0].image.url} />
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
