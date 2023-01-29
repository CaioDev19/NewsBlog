import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { Text } from "../../../../global/styles/Typography"

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
  justify-content: space-around;
  list-style-type: none;

  ${Text} {
  }
`
export const Link = styled(NavLink)`
  text-decoration: none;
  list-style-type: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.FONT_SIZE.rgl};
  color: ${({ theme }) => theme.COLORS.black};
  line-height: 1.3rem;

  transition: 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.COLORS.orange_red};
  }

  display: flex;
  align-items: center;
  gap: 0.5rem;
`
export const LiRelative = styled.li`
  position: relative;
`
export const NewsMenu = styled.ul`
  list-style-type: none;
  position: absolute;
  top: 2rem;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;

  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

  background-color: ${({ theme }) => theme.COLORS.white};
  padding: 1.25rem 2rem;
  border-radius: 15px;
`
