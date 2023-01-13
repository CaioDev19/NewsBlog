import * as Sc from "./style"
import { Text } from "../../../global/styles/Typography"
import { FontSize } from "../../../global/theme"
import { useNavigate } from "react-router-dom"
import { AiOutlineFacebook } from "react-icons/ai"
import { BsInstagram, BsWhatsapp } from "react-icons/bs"

interface Props {
  news: {
    image: string
    title: string
    date: string
    description?: string
  }
  size?: FontSize
  primary?: boolean
}

export function New({ news, size, primary }: Props) {
  const navigate = useNavigate()

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
            Postado em {news.date}
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
            Lifestyle
          </Text>
        </Sc.PrimaryNewsInfo>
        <Sc.PrimaryImage src={news.image} />
        <Text type="paragraph" as="p" size="lrg" position="left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Molestias obcaecati impedit necessitatibus dignissimos
          corrupti eum! Omnis laborum praesentium, magnam aliquid
          totam magni quasi, voluptates assumenda perspiciatis alias
          voluptate quo expedita. Ea tenetur aliquam quas dolorem fuga
          corrupti modi placeat expedita dignissimos doloribus ullam
          odio pariatur iure quod excepturi officia quae suscipit
          beatae cupiditate doloremque quis, ex nam! Possimus, ab
          numquam! Reprehenderit ut provident, officia non expedita
          placeat quod perspiciatis laboriosam voluptates! A,
          veritatis nulla soluta, sit molestias, itaque facilis
          excepturi illum ducimus placeat commodi. Error itaque nemo
          dignissimos accusantium tempore! Eveniet dolore placeat hic
          voluptate minus earum ipsam sit eos quaerat sapiente soluta
          ipsa mollitia laboriosam a accusantium iure fuga ad totam
          illum ipsum neque ratione dolorum, sint autem? Eum! Aliquam,
          error aperiam impedit eveniet ipsam minus quibusdam
          consectetur vitae corrupti, nobis dicta quidem vero quaerat
          praesentium? Neque, ducimus porro assumenda voluptates, sunt
          voluptatibus fuga minima laborum non, soluta eligendi.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eligendi cupiditate aliquid similique illum laudantium,
          sequi commodi voluptate quidem ipsam dolorum sit. Eius ipsa
          aperiam error eligendi ex placeat quibusdam vero. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Inventore
          quam, est cupiditate accusantium, pariatur a nobis amet quo
          fugiat porro ea commodi delectus esse totam laborum, numquam
          assumenda non modi.
        </Text>
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
          <AiOutlineFacebook />
          <BsInstagram />
          <BsWhatsapp />
        </Sc.ShareContainer>
      </Sc.PrimaryContainer>
    )
  }

  return (
    <Sc.New size={size} onClick={() => navigate("/post")}>
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
