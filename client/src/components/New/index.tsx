import * as Sc from "./style"
import { Text } from "../../global/styles/Typography"

interface Props {
  image: string
  title: string
  date: string
  description?: string
}

export function New({ image, title, date, description }: Props) {
  return (
    <Sc.New>
      <Sc.NewImage src={image} />
      <Sc.NewInfo>
        <Text
          type="title"
          as="h3"
          size="rgl"
          weight="str"
          position="left"
        >
          {title}
        </Text>
        <Text type="paragraph" as="p" color="black" position="left">
          {description}
        </Text>
        <Text type="span" as="span" color="gray_200" weight="str">
          {date}
        </Text>
      </Sc.NewInfo>
    </Sc.New>
  )
}
