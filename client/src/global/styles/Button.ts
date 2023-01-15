import styled, { css } from "styled-components"
import { FontSize, Colors, FontWeight } from "../theme"

interface Props {
  size: FontSize
  background?: Colors
  color?: Colors
  weight?: FontWeight
  radios?: "round" | "square"
}

export const Button = styled.button<Props>`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;
  box-shadow: 0px 7px 5px -6px rgba(0, 0, 0, 0.5);
  font-weight: ${({ theme, weight }) =>
    weight ? theme.FONT_WEIGHT[weight] : theme.FONT_WEIGHT.str};
  background-color: ${({ theme, background }) =>
    background ? theme.COLORS[background] : theme.COLORS.white};
  color: ${({ theme, color }) =>
    color ? theme.COLORS[color] : theme.COLORS.black};
  border-radius: ${({ radios }) => {
    switch (radios) {
      case "round":
        return "20px"
      case "square":
        return "5px"
      default:
        return "10px"
    }
  }};
  text-align: center;
  ${(props) => {
    switch (props.size) {
      case "lrg":
        return css`
          padding: ${({ theme }) => {
            return `${theme.SPACERS.rgl} ${theme.SPACERS.lrg}`
          }};
          font-size: ${({ theme }) => {
            return theme.SPACERS.lrg
          }};
          line-height: 1.1em;
          min-width: 4rem;
        `
      case "rgl":
        return css`
          padding: ${({ theme }) => {
            return `${theme.SPACERS.rgl} ${theme.SPACERS.rgl}`
          }};
          font-size: ${({ theme }) => {
            return theme.SPACERS.lrg
          }};
          line-height: 1.1em;
          min-width: 3rem;
        `
      case "sml":
        return css`
          padding: ${({ theme }) => {
            return `${theme.SPACERS.sml} ${theme.SPACERS.rgl}`
          }};
          font-size: ${({ theme }) => {
            return theme.SPACERS.rgl
          }};
          line-height: 1.1em;
          min-width: 5.5rem;
        `
    }
  }};
`
