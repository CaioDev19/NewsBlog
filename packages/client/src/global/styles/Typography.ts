import styled, { css } from "styled-components"
import { FontSize, FontWeight, Colors } from "../theme"

type textType = "title" | "paragraph" | "span"
type textPosition = "left" | "center" | "right" | "justify"

interface Props {
  type: textType
  weight?: FontWeight
  size?: FontSize
  position?: textPosition
  color?: Colors
  pointer?: boolean
}

export const Text = styled.p<Props>`
  margin: 0;
  cursor: ${({ pointer }) => pointer && "pointer"};
  text-align: ${({ position }) => (position ? position : "center")};
  color: ${({ theme, color }) => {
    return color ? theme.COLORS[color] : theme.COLORS.black
  }};
  word-wrap: break-word;

  ${(props) => {
    switch (props.type) {
      case "title":
        return css`
          font-weight: ${({ theme }) =>
            props.weight
              ? theme.FONT_WEIGHT[props.weight]
              : theme.FONT_WEIGHT.str};
          font-size: ${({ theme }) =>
            props.size
              ? theme.FONT_SIZE[props.size]
              : theme.FONT_SIZE.lrg};
        `
      case "paragraph":
        return css`
          font-weight: ${({ theme }) =>
            props.weight
              ? theme.FONT_WEIGHT[props.weight]
              : theme.FONT_WEIGHT.wek};
          font-size: ${({ theme }) =>
            props.size
              ? theme.FONT_SIZE[props.size]
              : theme.FONT_SIZE.rgl};
        `
      case "span":
        return css`
          font-weight: ${({ theme }) =>
            props.weight
              ? theme.FONT_WEIGHT[props.weight]
              : theme.FONT_WEIGHT.wek};
          font-size: ${({ theme }) =>
            props.size
              ? theme.FONT_SIZE[props.size]
              : theme.FONT_SIZE.sml};
        `
    }
  }}
`
