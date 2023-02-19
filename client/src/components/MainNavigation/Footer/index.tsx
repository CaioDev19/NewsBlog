import * as Sc from "./style"
import logo from "../../../assets/images/logo2-portal-m-bonfim.svg"
import { FaFacebookF } from "react-icons/fa"
import { BsInstagram, BsWhatsapp } from "react-icons/bs"
import { Text } from "../../../global/styles/Typography"
import { AiOutlineArrowUp } from "react-icons/ai"
import { scrollToTop } from "../../../utils/window"
import { useNavigate } from "react-router-dom"

export function Footer() {
  const navigate = useNavigate()

  return (
    <Sc.Container>
      <Sc.MainContainer>
        <Sc.InfoContainer>
          <Sc.Logo
            src={logo}
            alt="logo"
            onClick={() => navigate("/")}
          />
          <Text
            type="paragraph"
            size="rgl"
            color="white"
            position="center"
          >
            Nasce esse canal de comunicação , com a responsabilidade e
            o comprometimento de levar a informação verdadeira a todos
            que buscam seriedade e a livre opinião de pensamento.
          </Text>
          <Sc.SocialMediaWrapper>
            <Sc.SocialMedia as={FaFacebookF} />
            <Sc.SocialMedia as={BsInstagram} />
            <Sc.SocialMedia as={BsWhatsapp} />
          </Sc.SocialMediaWrapper>
        </Sc.InfoContainer>
      </Sc.MainContainer>
      <Sc.ContainerBackTop>
        <Sc.ArrowUp as={AiOutlineArrowUp} onClick={scrollToTop} />
      </Sc.ContainerBackTop>
      <Sc.DevContainer>
        <Text
          type="paragraph"
          as="span"
          position="center"
          color="whitesh"
        >
          Desenvolvido por{" "}
          <Sc.DevLink
            as="a"
            type="paragraph"
            color="whitesh"
            href="https://www.linkedin.com/in/caio-ara%C3%BAjo-416815243/"
            target="_blank"
          >
            Caio Araújo
          </Sc.DevLink>
        </Text>
      </Sc.DevContainer>
    </Sc.Container>
  )
}
