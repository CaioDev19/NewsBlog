import * as Sc from "./style"
import logo from "../../../assets/images/logo2-portal-m-bonfim.svg"
import { FaFacebookF } from "react-icons/fa"
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
                <Sc.SocialMedia
                  href="https://www.facebook.com/profile.php?id=100077172681111"
                  target="_blank"
                >
                  <FaFacebookF />
                </Sc.SocialMedia>
                <Sc.SocialMedia
                  href="https://www.instagram.com/joan.radio/"
                  target="_blank"
                >
                  <BsInstagram />
                </Sc.SocialMedia>
                <Sc.SocialMedia
                  href="https://wa.me/5571988853626"
                  target="_blank"
                >
                  <BsWhatsapp />
                </Sc.SocialMedia>
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
                  <Sc.SocialMedia
                    href="https://www.facebook.com/profile.php?id=100077172681111"
                    target="_blank"
                  >
                    <FaFacebookF />
                  </Sc.SocialMedia>
                  <Sc.SocialMedia
                    href="https://www.instagram.com/joan.radio/"
                    target="_blank"
                  >
                    <BsInstagram />
                  </Sc.SocialMedia>
                  <Sc.SocialMedia
                    href="https://wa.me/5571988853626"
                    target="_blank"
                  >
                    <BsWhatsapp />
                  </Sc.SocialMedia>
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
