import styled from "styled-components"
import { Text } from "../../../global/styles/Typography"

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
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.COLORS.orange_red};
    }
  }
`
