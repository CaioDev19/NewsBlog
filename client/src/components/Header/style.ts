import styled, { css } from "styled-components"
import { ContentContainer } from "../../global/styles/ContentContainer"

export const Container = styled.header<{ mobile?: boolean }>`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.black_200};
  padding: 2.5rem 0;

  ${({ mobile }) =>
    mobile &&
    css`
      position: sticky;
      z-index: 1;
      top: 0;
      padding: 1.5rem 0;
    `}
`
export const ContentWrapper = styled(ContentContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.tablet}px) {
    justify-content: center;
  }
`
export const Logo = styled.img`
  width: 15%;
  max-width: 225px;
  min-width: 180px;
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
export const HamburguerMenu = styled(SocialMedia)`
  font-size: ${({ theme }) => theme.FONT_SIZE.exl};
  position: fixed;
  top: 2.75rem;
  left: 1.5rem;
`
export const DateWrapper = styled.div`
  border-left: 1px solid ${({ theme }) => theme.COLORS.gray_200};
  border-right: 1px solid ${({ theme }) => theme.COLORS.gray_200};
  padding: 0 1rem;

  display: flex;
  gap: 0.5rem;
`
export const MobileLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 0 auto;
`
