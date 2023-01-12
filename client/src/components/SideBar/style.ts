import styled from "styled-components"
import { Text } from "../../global/styles/Typography"

export const StyledMobileSideBar = styled.div`
  background-color: ${({ theme }) => theme.COLORS.whitesh};
  width: 55%;
  height: 100vh;

  overflow-y: auto;
  z-index: 1;
  border-right: 1px solid ${({ theme }) => theme.COLORS.gray};

  margin-right: 0;
  padding: 1.25rem 0 1.25rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;

  box-shadow: 2px 0px 5px 0px rgba(0, 0, 0, 0.3);
`
export const CloseBtn = styled.svg`
  position: absolute;
  cursor: pointer;
  top: 0.5rem;
  right: 0.5rem;

  font-size: 2rem;
`
export const UpperContent = styled.div`
  width: 100%;
`
export const Logo = styled.img`
  width: 150px;
  align-self: flex-start;
  margin-bottom: 2rem;
`
export const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
  list-style-type: none;
  width: 100%;

  ${Text} {
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    border-top: 2px solid ${({ theme }) => theme.COLORS.gray};
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.gray};

    padding: 1rem 0;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    &:hover {
      color: ${({ theme }) => theme.COLORS.orange_red};
    }
  }
`
export const DateWrapper = styled.div`
  border-left: 1px solid ${({ theme }) => theme.COLORS.gray_200};
  border-right: 1px solid ${({ theme }) => theme.COLORS.gray_200};
  padding: 0 1rem;

  display: flex;
  gap: 0.5rem;
`
