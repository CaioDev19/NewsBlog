import styled, { css } from "styled-components"
import { Text } from "../../global/styles/Typography"
import { FontSize } from "../../global/theme"

export const New = styled.div<{ size?: FontSize }>`
  display: flex;
  align-items: center;
  justify-content: ${({ size }) =>
    size === "lrg" ? "flex-start" : "center"};
  gap: 1.25rem;

  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.mobile}px) {
    flex-direction: column;
  }
`
export const NewImage = styled.img<{ size?: FontSize }>`
  border-radius: 25px;
  object-fit: cover;
  ${({ size }) => {
    switch (size) {
      case "sml":
        return css`
          width: 180px;
          height: 120px;
        `
      case "lrg":
        return css`
          width: 400px;
          height: 280px;
        `
      default:
        return css`
          width: 180px;
          height: 120px;

          @media (max-width: ${({ theme }) =>
              theme.BREAKPOINTS.tablet}px) {
            width: 400px;
            height: 280px;
          }
        `
    }
  }}

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.mobile}px) {
    width: 100%;
    height: 370px;
  }
`
export const NewInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 55%;

  ${Text} {
    max-width: 55ch;
  }

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.mobile}px) {
    width: 100%;
  }
`
