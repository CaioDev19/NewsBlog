import styled from "styled-components"
import { Text } from "../../../global/styles/Typography"

export const ContainerNav = styled.nav`
  background-color: ${({ theme }) => theme.COLORS.gray_100};
  padding: 1.75rem 0;
  width: 100%;
`
export const WrapperNav = styled.div`
  width: 80%;
  margin: 0 auto;
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
