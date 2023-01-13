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

export function MainSection() {
  return (
    <Sc.MainContainer as="section">
      <News news={a} size="lrg" />
      <Sc.AddContainer>
        <Sc.Ad src="https://via.placeholder.com/500/#ffff https://placeholder.com/" />
        <Sc.Ad src="https://via.placeholder.com/500/#ffff https://placeholder.com/" />
        <Sc.Ad src="https://via.placeholder.com/500/#ffff https://placeholder.com/" />
      </Sc.AddContainer>
    </Sc.MainContainer>
  )
}
