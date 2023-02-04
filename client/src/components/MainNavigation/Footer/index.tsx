import * as Sc from "./style"
import logo from "../../../assets/images/logo2-portal-m-bonfim.svg"
import { AiOutlineFacebook } from "react-icons/ai"
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
            Far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind
            texts.
          </Text>
          <Sc.SocialMediaWrapper>
            <Sc.SocialMedia as={AiOutlineFacebook} />
            <Sc.SocialMedia as={BsInstagram} />
            <Sc.SocialMedia as={BsWhatsapp} />
          </Sc.SocialMediaWrapper>
        </Sc.InfoContainer>
      </Sc.MainContainer>
      <Sc.ContainerBackTop>
        <Sc.ArrowUp as={AiOutlineArrowUp} onClick={scrollToTop} />
      </Sc.ContainerBackTop>
    </Sc.Container>
  )
}
