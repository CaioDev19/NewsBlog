import { Placeholder, Col } from "react-bootstrap"
import styled, { css } from "styled-components"

export const StyledPlaceholder = styled(Placeholder)<{
  size?: "sml" | "lrg" | "mdn"
}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ size }) => {
    if (size === "mdn") {
      return css`
        max-width: 100%;
        gap: 1rem;
        flex-direction: column;
      `
    } else {
      return css`
        max-width: 1000px;
      `
    }
  }}

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.mobile}px) {
    flex-direction: column;
    gap: 1rem;
  }
`
export const ImagePlaceholder = styled(Placeholder)<{
  size?: "lrg" | "mdn" | "sml"
}>`
  border-radius: 25px;
  ${({ size }) => {
    switch (size!) {
      case "mdn":
        return css`
          width: 100%;
          height: 350px;
        `
      case "lrg":
        return css`
          width: 45%;
          height: 350px;
        `
      default:
        return css`
          width: 45%;
          height: 125px;
        `
    }
  }}

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.mobile}px) {
    width: 100%;
    height: 350px;
  }
`
export const TextCol = styled(Col)<{
  size?: "lrg" | "mdn" | "sml"
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  ${({ size }) => {
    switch (size!) {
      case "mdn":
        return css`
          align-items: flex-start;
          width: 100%;
        `
      default:
        return css`
          align-items: center;
          width: 55%;
        `
    }
  }};

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.mobile}px) {
    align-items: center;
    width: 100%;
  }
`
