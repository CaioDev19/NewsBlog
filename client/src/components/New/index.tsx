import * as Sc from "./style"
import { Text } from "../../global/styles/Typography"
import { FontSize } from "../../global/theme"

interface Props {
  news: {
    image: string
    title: string
    date: string
    description?: string
  }
  size?: FontSize
}

export function New({ news, size }: Props) {
  return (
    <Sc.New size={size}>
      <Sc.NewImage size={size} src={news.image} />
      <Sc.NewInfo>
        <Text
          type="title"
          as="h3"
          size={size === "lrg" ? size : "rgl"}
          weight="str"
          position="left"
        >
          {news.title}
        </Text>
        <Text type="paragraph" as="p" color="black" position="left">
          {news.description}
        </Text>
        <Text
          type="span"
          as="span"
          color="gray_200"
          weight="str"
          size={size === "lrg" ? "rgl" : "sml"}
        >
          {news.date}
        </Text>
      </Sc.NewInfo>
    </Sc.New>
  )
}
