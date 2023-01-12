import styled from "styled-components"
import { Text } from "../../../global/styles/Typography"

export const ContainerNav = styled.nav`
  background-color: ${({ theme }) => theme.COLORS.white};
  padding: 1.75rem 0;
  width: 100%;
`
export const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;

  ${Text} {
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.COLORS.orange_red};
    }
  }
`
