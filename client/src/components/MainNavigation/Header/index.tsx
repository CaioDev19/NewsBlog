import * as Sc from "./style"
import logo from "../../../assets/images/logo2-portal-m-bonfim.svg"
import { AiOutlineFacebook } from "react-icons/ai"
import { BsInstagram, BsWhatsapp } from "react-icons/bs"
import { Text } from "../../../global/styles/Typography"
import { NavBar } from "./NavBar"
import { useTheme } from "styled-components"
import { useWindow } from "../../../hooks/useWindow"
import { GiHamburgerMenu } from "react-icons/gi"
import { MobileSideBar } from "../../SideBar"
import { useToggle } from "../../../hooks/useToggle"
import { useNavigate } from "react-router-dom"
import { useRef } from "react"

export function Header() {
  const [isOpen, toggle] = useToggle()
  const theme = useTheme()
  const { width } = useWindow()
  const navigate = useNavigate()
  const currentDate = useRef(new Date().toLocaleDateString())

  return (
    <>
      <Sc.Container
        tablet={width! <= theme.BREAKPOINTS.tablet && true}
      >
        <Sc.ContentWrapper>
          {(width as number) > theme.BREAKPOINTS.tablet ? (
            <>
              <Sc.DateWrapper>
                <Text type="span" as="span" color="white" size="sml">
                  {currentDate.current}
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
              </Sc.MobileLogoWrapper>
            </>
          )}
        </Sc.ContentWrapper>
      </Sc.Container>
      {(width as number) > theme.BREAKPOINTS.tablet && <NavBar />}
    </>
  )
}
