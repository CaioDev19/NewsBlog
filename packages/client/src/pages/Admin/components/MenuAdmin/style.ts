import styled from "styled-components"
import { Link as L } from "react-router-dom"

export const Container = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 2.5rem;
  z-index: 5;
`
export const OverLayToggle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`
export const AdmBtn = styled.svg`
  position: relative;
  width: 3rem;
  height: 3rem;

  cursor: pointer;

  padding: 0.5rem;

  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.COLORS.black};
  background-color: ${({ theme }) => theme.COLORS.white};

  transition: 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`

export const MenuContainer = styled.div`
  position: absolute;
  left: -35px;
  bottom: 55px;

  border: 1px solid ${({ theme }) => theme.COLORS.black};
  border-radius: 25px;

  padding: 1.5rem 1.25rem;

  background-color: ${({ theme }) => theme.COLORS.white};
`

export const Nav = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  width: 100%;

  li {
    width: 100%;
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

  padding: 1rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  &:hover {
    color: ${({ theme }) => theme.COLORS.orange_red};
  }
`
