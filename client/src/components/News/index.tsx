import * as Sc from "./style"
import { New } from "../New"

interface Props {
  primary?: boolean
  news: any
}

export function News({ primary, news }: Props) {
  if (primary) {
    return (
      <Sc.NewsContainer primary={primary}>
        {news.map((newI: any) => {
          return <New news={newI} />
        })}
      </Sc.NewsContainer>
    )
  }

  return (
    <Sc.MainContainer>
      <Sc.NewsContainer>
        {news.map((newI: any) => {
          return <New size="lrg" news={newI} />
        })}
      </Sc.NewsContainer>
      <Sc.AddContainer>
        <Sc.Add src="https://via.placeholder.com/500/#ffff https://placeholder.com/" />
        <Sc.Add src="https://via.placeholder.com/500/#ffff https://placeholder.com/" />
        <Sc.Add src="https://via.placeholder.com/500/#ffff https://placeholder.com/" />
      </Sc.AddContainer>
    </Sc.MainContainer>
  )
}
