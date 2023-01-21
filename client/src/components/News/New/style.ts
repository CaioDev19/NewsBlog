import styled, { css } from "styled-components"
import { NavLink } from "react-router-dom"
import { Text } from "../../../global/styles/Typography"

export const NewImage = styled.img<{ size?: "lrg" | "sml" }>`
  border-radius: 25px;
  object-fit: cover;
  flex-shrink: 0;

  ${({ size }) => {
    switch (size) {
      case "sml":
        return css`
          width: 240px;
          height: 120px;
        `
      case "lrg":
        return css`
          width: 400px;
          height: 280px;
        `
      default:
        return css`
          width: 240px;
          height: 120px;

          @media (max-width: ${({ theme }) =>
              theme.BREAKPOINTS.notbook}px) {
            width: 400px;
            height: 280px;
          }
        `
    }
  }}
`
export const NewInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 55%;

  ${Text} {
    max-width: 600px;
  }
`
export const New = styled(NavLink)<{ size?: "lrg" | "sml" }>`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: ${({ size }) =>
    size === "lrg" ? "flex-start" : "center"};
  width: 100%;
  max-width: 1000px;
  gap: 1.25rem;

  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.mobile}px) {
    flex-direction: column;

    ${NewImage} {
      width: 100%;
      height: 370px;
      flex-shrink: 1;
    }

    ${NewInfo} {
      width: 100%;
    }
  }
`
export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`

export const PrimaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  width: 100%;
`

export const PrimaryImage = styled.img`
  width: 100%;
  object-fit: cover;
  max-height: 700px;
  border-radius: 25px;
`

export const PrimaryNewsInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`

export const ShareContainer = styled(PrimaryNewsInfo)`
  svg {
    cursor: pointer;
    font-size: ${({ theme }) => theme.FONT_SIZE.exl};
    transition: 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.COLORS.orange_red};
    }
  }
`
