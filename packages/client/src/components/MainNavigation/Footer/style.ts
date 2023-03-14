import styled from "styled-components"
import { ContentContainer } from "../../../global/styles/ContentContainer"
import { Text } from "../../../global/styles/Typography"

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  position: relative;

  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.black_200};
  padding-top: 2.5rem;
  padding-bottom: 3.75rem;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.tablet}px) {
    flex-direction: column;
  }
`
export const Logo = styled.img`
  width: 150px;
  object-fit: cover;
  cursor: pointer;
`
export const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`
export const SocialMedia = styled.a`
  text-decoration: none;
  width: 1.25rem;
  height: 1.25rem;
  color: ${({ theme }) => theme.COLORS.white};
  font-size: ${({ theme }) => theme.FONT_SIZE.lrg};
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.COLORS.gray_200};
  }
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.35rem;
  width: 35%;
`
export const ArrowUp = styled.svg`
  color: ${({ theme }) => theme.COLORS.white};
  font-size: ${({ theme }) => theme.FONT_SIZE.exl};
  border: 2px solid ${({ theme }) => theme.COLORS.white};
  border-radius: 50%;
  height: 50px;
  width: 50px;
  padding: 0.5rem;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.COLORS.gray_200};
  }
`
export const ContainerBackTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 2rem;
  right: 8rem;

  gap: 1.5rem;

  ${Text} {
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.tablet}px) {
    position: relative;
    right: 0;
    bottom: 0;
  }
`
export const MainContainer = styled(ContentContainer)`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.tablet}px) {
    flex-direction: column;

    ${InfoContainer} {
      width: 100%;
      align-items: center;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.white};
      padding-bottom: 1.5rem;

      ${Text} {
        max-width: 60ch;
      }
    }
  }
`
export const DevContainer = styled.div`
  position: absolute;
  bottom: 0.55rem;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const DevLink = styled(Text)`
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
    color: white;
  }
`
