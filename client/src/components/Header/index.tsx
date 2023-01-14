import * as Sc from "./style"
import logo from "../../assets/images/logowhite.png"
import { AiOutlineFacebook } from "react-icons/ai"
import { BsInstagram, BsWhatsapp } from "react-icons/bs"
import { Text } from "../../global/styles/Typography"
import { NavBar } from "./NavBar"
import { useTheme } from "styled-components"
import { useWindowDimensions } from "../../hooks/useWindowDimensions"
import { GiHamburgerMenu } from "react-icons/gi"
import { MobileSideBar } from "../SideBar"
import { useToggle } from "../../hooks/useToggle"
import { useNavigate } from "react-router-dom"

export function Header() {
  const [isOpen, toggle] = useToggle()
  const theme = useTheme()
  const { width } = useWindowDimensions()
  const navigate = useNavigate()

  return (
    <>
      <Sc.Container
        mobile={width! <= theme.BREAKPOINTS.mobile && true}
      >
        <Sc.ContentWrapper>
          {(width as number) > theme.BREAKPOINTS.tablet ? (
            <>
              <Sc.DateWrapper>
                <Text
                  type="span"
                  as="span"
                  color="gray_200"
                  weight="sstr"
                >
                  Hoje
                </Text>
                <Text type="paragraph" color="white" size="sml">
                  é 25 / 05 / 2021
                </Text>
              </Sc.DateWrapper>
              <Sc.Logo
                src={logo}
                alt="logo"
                onClick={() => navigate("/")}
              />
              <Sc.SocialMediaWrapper>
                <Sc.SocialMedia as={AiOutlineFacebook} />
                <Sc.SocialMedia as={BsInstagram} />
                <Sc.SocialMedia as={BsWhatsapp} />
              </Sc.SocialMediaWrapper>
            </>
          ) : (
            <>
              <Sc.HamburguerMenu
                as={GiHamburgerMenu}
                onClick={toggle}
              />
              <MobileSideBar handleToggle={toggle} isOpen={isOpen} />
              <Sc.MobileLogoWrapper>
                <Sc.Logo src={logo} alt="logo" />
                <Sc.SocialMediaWrapper>
                  <Sc.SocialMedia as={AiOutlineFacebook} />
                  <Sc.SocialMedia as={BsInstagram} />
                  <Sc.SocialMedia as={BsWhatsapp} />
                </Sc.SocialMediaWrapper>
              </Sc.MobileLogoWrapper>
            </>
          )}
        </Sc.ContentWrapper>
      </Sc.Container>
      {(width as number) > theme.BREAKPOINTS.tablet && <NavBar />}
    </>
  )
}
