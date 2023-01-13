import { News } from "../News"
import * as Sc from "./style"

const b = [
  {
    image:
      "https://via.placeholder.com/500/#ffff https://placeholder.com/",
    title:
      " loren ipsum dolor sit amet consectetur adipisicing elit.",
    date: "30/10/2021",
  },
  {
    image:
      "https://via.placeholder.com/500/#ffff https://placeholder.com/",
    title:
      " loren ipsum dolor sit amet consectetur adipisicing elit.",
    date: "30/10/2021",
  },
  {
    image:
      "https://via.placeholder.com/500/#ffff https://placeholder.com/",
    title:
      " loren ipsum dolor sit amet consectetur adipisicing elit.",
    date: "30/10/2021",
  },
]

export function HeroSection() {
  return (
    <Sc.Container>
      <Sc.ContentWrapper>
        <Sc.Banner src="https://via.placeholder.com/1000/#ffff https://placeholder.com/" />
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
            <News news={b} />
          </Sc.RightContent>
        </Sc.LowerContent>
      </Sc.ContentWrapper>
    </Sc.Container>
  )
}
