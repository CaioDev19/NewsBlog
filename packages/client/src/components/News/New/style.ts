import styled, { css } from "styled-components"
import { Text } from "../../../global/styles/Typography"
import { Size } from "../../../interfaces/component"

export const NewImage = styled.img<{ size?: Size }>`
  border-radius: 25px;
  object-fit: cover;
  flex-shrink: 0;

  ${({ size }) => {
    switch (size) {
      case "sml":
        return css`
          width: 240px;
          height: 140px;
        `
      case "mdn":
        return css`
          width: 100%;
          height: 320px;

          @media (max-width: 1550px) {
            height: 220px;
          }
        `
      case "lrg":
        return css`
          width: 400px;
          height: 280px;
        `
      default:
        return css`
          width: 240px;
          height: 140px;
        `
    }
  }}
  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.notbook}px) {
    width: 400px;
    height: 280px;
  }
`
export const NewInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.65rem;
  width: 55%;

  ${Text} {
    max-width: 600px;
  }
`
export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.65rem;
`
export const New = styled.div<{ size?: Size }>`
  all: unset;
  display: flex;
  flex-direction: ${({ size }) =>
    size === "mdn" ? "column" : "row"};
  align-items: center;
  justify-content: ${({ size }) =>
    size === "lrg" ? "flex-start" : "center"};
  width: 100%;
  max-width: 1000px;
  gap: 1.25rem;

  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  ${NewInfo} {
    width: ${({ size }) => size === "mdn" && "100%"};
  }

  ${({ size }) => {
    if (size === "mdn") {
      return css`
        @media (max-width: ${({ theme }) =>
            theme.BREAKPOINTS.notbook}px) {
          flex-direction: row;
        }
      `
    }
  }}

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.tablet}px) {
    transform: none;
    transition: none;

    &:hover {
      transform: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.mobile}px) {
    flex-direction: column;

    ${NewImage} {
      width: 100%;
      height: 380px;
      flex-shrink: 1;
    }

    ${NewInfo} {
      width: 100%;
    }
  }
  ${({ theme }) => {
    return css`
      @media (max-width: ${theme.BREAKPOINTS.mobile_small}px) {
        ${NewImage} {
          height: 280px;
        }
      }
    `
  }} {
  }
`
export const PrimaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  width: 70%;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.notbook}px) {
    width: 100%;
  }
`

export const PrimaryImage = styled.img`
  width: 100%;
  object-fit: cover;
  max-height: 700px;
  border-radius: 25px;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.mobile}px) {
    min-height: 375px;
  }
`
export const PrimaryNewsInfo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem;
`
export const InfoWrapper = styled.div`
  padding-right: 1.25rem;
  position: relative;

  &::after {
    content: "|";
    position: absolute;
    right: 0;
    top: 0.2rem;
    bottom: 0;
  }

  @media (max-width: 400px) {
    padding: 0;
    &::after {
      content: none;
    }
  }
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
export const AdminButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  svg {
    transition: 0.2s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.COLORS.orange_red};
    }
  }
`
