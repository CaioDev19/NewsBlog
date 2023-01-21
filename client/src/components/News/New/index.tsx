import * as Sc from "./style"
import { Text } from "../../../global/styles/Typography"
import { Article } from "../../../interfaces/api"
import { ShareButton } from "../../ShareButton"
import { useWindow } from "../../../hooks/useWindow"
import { Editor } from "../../Editor"

interface Props {
  news: Article
  size?: "lrg" | "sml"
  primary?: boolean
}

export function New({ news, size, primary }: Props) {
  const { url } = useWindow()

  if (primary) {
    return (
      <Sc.PrimaryContainer>
        <Text
          type="title"
          as="h2"
          size="exl"
          weight="str"
          position="left"
        >
          {news.title}
        </Text>
        <Sc.PrimaryNewsInfo>
          <Text
            type="span"
            as="span"
            size="lrg"
            position="left"
            color="gray_200"
          >
            Postado em {new Date(news.date).toLocaleDateString()}
          </Text>
          |
          <Text
            type="span"
            as="span"
            size="lrg"
            position="left"
            color="light_blue"
            pointer
          >
            {news.category.name}
          </Text>
        </Sc.PrimaryNewsInfo>
        <Sc.PrimaryImage src={news.image.url} />
        <Editor theme="bubble" body={news.content} />
        <Sc.ShareContainer>
          <Text
            type="span"
            as="span"
            size="lrg"
            position="left"
            weight="str"
          >
            COMPARTILHE:
          </Text>
          <ShareButton social="facebook" url={url!} />
          <ShareButton social="twitter" url={url!} />
          <ShareButton social="whatsapp" url={url!} />
        </Sc.ShareContainer>
      </Sc.PrimaryContainer>
    )
  }

  return (
    <Sc.New size={size} to={`/notícia/${news.id}`}>
      <Sc.NewImage
        size={size}
        src={news.image.url}
        alt={news.image.name}
      />
      <Sc.NewInfo>
        <Sc.Flex>
          <Text type="span" as="span" size="lrg" position="center">
            {news.title}
          </Text>
          <Text
            type="span"
            as="span"
            size="rgl"
            position="center"
            color="light_blue"
            pointer
          >
            {news.category.name}
          </Text>
        </Sc.Flex>
        {size === "lrg" && (
          <Text
            type="paragraph"
            as="p"
            color="black"
            position="justify"
          >
            {news.summary}
          </Text>
        )}
        <Text
          type="span"
          as="span"
          color="gray_200"
          weight="str"
          size={size === "lrg" ? "rgl" : "sml"}
        >
          Postado em {new Date(news.date).toLocaleDateString()}
        </Text>
      </Sc.NewInfo>
    </Sc.New>
  )
}
