import * as Sc from "./style"
import { Text } from "../../../global/styles/Typography"
import { useNavigate } from "react-router-dom"
import { News } from "../../../interfaces/api"
import { ShareButton } from "../../ShareButton"
import { useWindow } from "../../../hooks/useWindow"

interface Props {
  news: News
  size?: "lrg" | "sml"
  primary?: boolean
}

export function New({ news, size, primary }: Props) {
  const navigate = useNavigate()
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
            Postado em 30/01/2021
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
        <Sc.PrimaryImage src={news.url} />
        <Text type="paragraph" as="p" size="lrg" position="left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sunt recusandae et, reiciendis minus accusantium voluptates
          natus libero omnis perspiciatis voluptate, consectetur
          maxime earum totam officia vel. Dignissimos, architecto.
          Nam, fugit! Minima autem accusamus totam unde beatae labore
          quis sit ipsa ex ad quia quod, harum quisquam vero numquam
          obcaecati ducimus eaque sunt aliquam repudiandae magni?
          Perspiciatis ea quaerat esse nostrum! Quisquam commodi in
          tenetur voluptate laboriosam, officiis quis consectetur rem
          non? Nostrum voluptates illo corrupti, quia voluptate natus
          vel deleniti reiciendis et illum quis blanditiis inventore
          animi fugiat, maiores molestias? Soluta, nesciunt quod
          numquam maiores dolor facilis in illo dolorum inventore
          magnam exercitationem, recusandae suscipit ab repudiandae
          quia perferendis ex illum fuga sapiente commodi perspiciatis
          quis sed doloribus! Ex, animi. Explicabo modi nobis autem,
          ipsum voluptate illo a distinctio blanditiis doloremque
          recusandae maxime, aperiam atque provident nostrum
          voluptatibus esse minus et repellendus quos unde delectus
          dolore. Sit exercitationem reiciendis quaerat.
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
          <ShareButton social="facebook" url={url!} />
          <ShareButton social="twitter" url={url!} />
          <ShareButton social="whatsapp" url={url!} />
        </Sc.ShareContainer>
      </Sc.PrimaryContainer>
    )
  }

  return (
    <Sc.New size={size} onClick={() => navigate(`post/${news.id}`)}>
      <Sc.NewImage size={size} src={news.url} />
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
        {size === "lrg" && (
          <Text
            type="paragraph"
            as="p"
            color="black"
            position="justify"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Molestiae ipsam similique, dolorem delectus aspernatur
            voluptatibus repellat vitae veniam pariatur totam
            distinctio hic omnis aliquam eius nisi cupiditate amet
            dolores facilis. Possimus pariatur aut, quod minima magni
            voluptatum quis quas? Nihil porro temporibus unde libero
            pariatur velit placeat est recusandae ab, adipisci dolorum
            facere iste laborum aspernatur, nesciunt eaque deserunt
            quisquam. Reiciendis minus, expedita consequatur a
            accusantium harum iure ratione ducimus, deleniti incidunt
            consectetur voluptas voluptatem animi in, pariatur dolor
            eveniet reprehenderit. Dolore, eligendi? Libero temporibus
            minima ratione, amet aspernatur sint.
          </Text>
        )}
        <Text
          type="span"
          as="span"
          color="gray_200"
          weight="str"
          size={size === "lrg" ? "rgl" : "sml"}
        >
          Postado em 30/01/2021
        </Text>
      </Sc.NewInfo>
    </Sc.New>
  )
}
