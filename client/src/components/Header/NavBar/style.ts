import styled from "styled-components"
import { Text } from "../../../global/styles/Typography"
import { Link as L } from "react-router-dom"

export const ContainerNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.COLORS.white};
  box-shadow: 2px 0px 5px 0px rgba(0, 0, 0, 0.3);
  padding: 1.45rem 0;
  width: 100%;
`
export const Nav = styled.ul`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;

  ${Text} {
  }
`
export const Link = styled(L)`
  text-decoration: none;
  list-style-type: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.FONT_SIZE.rgl};
  color: ${({ theme }) => theme.COLORS.black};
  line-height: 1.3rem;

  text-transform: uppercase;
  transition: 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.COLORS.orange_red};
  }
`
