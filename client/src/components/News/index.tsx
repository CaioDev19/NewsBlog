import * as Sc from "./style"
import { New } from "../New"
import { FontSize } from "../../global/theme"

interface Props {
  size?: FontSize
  news: any
}

export function News({ news, size }: Props) {
  return (
    <Sc.NewsContainer>
      {news.map((newI: any, i: number) => {
        return <New news={newI} size={size} key={i} />
      })}
    </Sc.NewsContainer>
  )
}
