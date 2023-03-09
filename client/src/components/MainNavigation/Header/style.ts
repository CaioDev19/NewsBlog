import styled, { css } from "styled-components"
import { ContentContainer } from "../../../global/styles/ContentContainer"

export const Container = styled.header<{ tablet?: boolean }>`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.black_200};

  ${({ tablet }) =>
    tablet &&
    css`
      position: sticky;
      z-index: 5;
      top: 0;
      padding-bottom: 1rem;
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
  width: 10%;
  max-width: 150px;
  min-width: 125px;
  cursor: pointer;
`
export const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`
export const SocialMedia = styled.a`
  color: ${({ theme }) => theme.COLORS.white};
  width: 1.25rem;
  height: 1.25rem;
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
  top: 4.8rem;
  left: 1.5rem;
`
export const DateWrapper = styled.div`
  border-left: 1px solid ${({ theme }) => theme.COLORS.gray_200};
  border-right: 1px solid ${({ theme }) => theme.COLORS.gray_200};
  padding: 0 1rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;
`
export const MobileLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`
