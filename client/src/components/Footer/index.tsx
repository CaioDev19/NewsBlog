import * as Sc from "./style"
import logo from "../../assets/images/logowhite.png"
import { AiOutlineFacebook } from "react-icons/ai"
import { BsInstagram, BsWhatsapp } from "react-icons/bs"
import { Text } from "../../global/styles/Typography"
import { FaArrowUp } from "react-icons/fa"
import { scrollToTop } from "../../utils/window"

export function Footer() {
  return (
    <Sc.Container>
      <Sc.MainContainer>
        <Sc.InfoContainer>
          <Sc.Logo src={logo} alt="logo" />
          <Text
            type="paragraph"
            size="rgl"
            color="white"
            position="left"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Sequi ullam eveniet molestiae itaque accusantium? Non
            reprehenderit consequuntur necessitatibus molestiae sequi
            porro quo, deserunt, natus, atque consequatur dicta
            ducimus tempora voluptates!
          </Text>
          <Sc.SocialMediaWrapper>
            <Sc.SocialMedia as={AiOutlineFacebook} />
            <Sc.SocialMedia as={BsInstagram} />
            <Sc.SocialMedia as={BsWhatsapp} />
          </Sc.SocialMediaWrapper>
        </Sc.InfoContainer>
        <Sc.ArrowUp as={FaArrowUp} onClick={scrollToTop} />
      </Sc.MainContainer>
    </Sc.Container>
  )
}
