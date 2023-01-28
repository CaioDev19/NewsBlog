import { usePaginatedNews } from "../../../hooks/react-query/query/usePaginatedNews"
import { News } from "../../News"
import banner from "../../../assets/images/Imagem do WhatsApp de 2023-01-26 à(s) 20.09.09.jpg"
import * as Sc from "./style"

interface Props {
  primary?: boolean
}

export function HeroSection({ primary }: Props) {
  const { data, isLoading } = usePaginatedNews({})

  return (
    <Sc.Container>
      <Sc.ContentWrapper>
        <Sc.Banner src={banner} />
        {primary && (
          <Sc.LowerContent>
            {isLoading ? (
              <Sc.ContainerPlaceholder animation="glow">
                <Sc.ImagePlaceholder />
              </Sc.ContainerPlaceholder>
            ) : (
              <Sc.LeftContent
                src={data?.data.posts?.[0]?.image.url}
              />
            )}

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
