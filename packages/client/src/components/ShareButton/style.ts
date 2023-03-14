import styled from "styled-components"

export const Icon = styled.svg`
  color: ${({ theme }) => theme.COLORS.black};
  font-size: ${({ theme }) => theme.FONT_SIZE.lrg};
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.COLORS.gray_200};
  }
`
export const Link = styled.a`
  text-decoration: none;
`
