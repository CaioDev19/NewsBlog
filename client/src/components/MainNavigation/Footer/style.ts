import styled from "styled-components"
import { ContentContainer } from "../../../global/styles/ContentContainer"
import { Text } from "../../../global/styles/Typography"
import { Input } from "../../Form/Input"

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.black_200};
  padding: 2.5rem 0;
`
export const Logo = styled.img`
  width: 200px;
  cursor: pointer;
`
export const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`
export const SocialMedia = styled.svg`
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
  gap: 1.75rem;
  width: 30%;
`
export const ContactInfo = styled(InfoContainer)`
  width: 50%;
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
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
export const SInput = styled(Input)`
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.white};
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.white};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.white};
    text-transform: uppercase;
    text-align: center;
    opacity: 0.8;
  }
`
export const ContainerBackTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1.5rem;

  ${Text} {
    margin: 0;
  }
`
export const MainContainer = styled(ContentContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

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
