import { News } from "../News"
import * as Sc from "./style"

const a = [
  {
    image:
      "https://via.placeholder.com/500/#ffff https://placeholder.com/",
    title:
      " loren ipsum dolor sit amet consectetur adipisicing elit.",
    date: "30/10/2021",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusamus eligendi, reiciendis, vitae nam amet vero nesciunt quisquam nulla eos aut. Consequuntur doloribus commodi quae architecto at illum ab neque!",
  },
  {
    image:
      "https://via.placeholder.com/500/#ffff https://placeholder.com/",
    title:
      " loren ipsum dolor sit amet consectetur adipisicing elit.",
    date: "30/10/2021",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusamus eligendi, reiciendis, vitae nam amet vero nesciunt quisquam nulla eos aut. Consequuntur doloribus commodi quae architecto at illum ab neque!",
  },
  {
    image:
      "https://via.placeholder.com/500/#ffff https://placeholder.com/",
    title:
      " loren ipsum dolor sit amet consectetur adipisicing elit.",
    date: "30/10/2021",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusamus eligendi, reiciendis, vitae nam amet vero nesciunt quisquam nulla eos aut. Consequuntur doloribus commodi quae architecto at illum ab neque!",
  },
  {
    image:
      "https://via.placeholder.com/500/#ffff https://placeholder.com/",
    title:
      " loren ipsum dolor sit amet consectetur adipisicing elit.",
    date: "30/10/2021",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusamus eligendi, reiciendis, vitae nam amet vero nesciunt quisquam nulla eos aut. Consequuntur doloribus commodi quae architecto at illum ab neque!",
  },
  {
    image:
      "https://via.placeholder.com/500/#ffff https://placeholder.com/",
    title:
      " loren ipsum dolor sit amet consectetur adipisicing elit.",
    date: "30/10/2021",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusamus eligendi, reiciendis, vitae nam amet vero nesciunt quisquam nulla eos aut. Consequuntur doloribus commodi quae architecto at illum ab neque!",
  },
]
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
    <>
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
              <News news={b} primary />
            </Sc.RightContent>
          </Sc.LowerContent>
        </Sc.ContentWrapper>
      </Sc.Container>
      <News news={a} />
    </>
  )
}
