import * as Sc from "./style"
import logo from "../../assets/images/logowhite.png"
import { AiOutlineFacebook } from "react-icons/ai"
import { BsInstagram, BsWhatsapp } from "react-icons/bs"
import { Text } from "../../global/styles/Typography"
import { NavBar } from "./NavBar"
import { useTheme } from "styled-components"
import { useWindowDimensions } from "../../hooks/useWindowDimensions"
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react"
import { MobileSideBar } from "../SideBar"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useTheme()
  const { width } = useWindowDimensions()

  return (
    <>
      <Sc.Container>
        <Sc.ContentWrapper>
          {(width as number) > theme.BREAKPOINTS.tablet ? (
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
          ) : (
            <>
              <Sc.HamburguerMenu
                as={GiHamburgerMenu}
                onClick={() => setIsOpen(!isOpen)}
              />
              <MobileSideBar
                handleToggle={() => setIsOpen(!isOpen)}
                isOpen={isOpen}
              />
            </>
          )}
          <Sc.Logo src={logo} alt="logo" />
          <Sc.SocialMediaWrapper>
            <Sc.SocialMedia as={AiOutlineFacebook} />
            <Sc.SocialMedia as={BsInstagram} />
            <Sc.SocialMedia as={BsWhatsapp} />
          </Sc.SocialMediaWrapper>
        </Sc.ContentWrapper>
      </Sc.Container>
      {(width as number) > theme.BREAKPOINTS.tablet && <NavBar />}
    </>
  )
}
