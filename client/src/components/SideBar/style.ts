import styled from "styled-components"

export const StyledMobileSideBar = styled.div`
  background-color: ${({ theme }) => theme.COLORS.whitesh};
  width: 55%;
  height: 100vh;

  overflow-y: auto;
  z-index: 1;
  border-right: 1px solid ${({ theme }) => theme.COLORS.gray};

  margin-right: 0;
  padding: 1.25rem 1rem;

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
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Logo = styled.img`
  width: 100px;
  margin-bottom: 2rem;
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
export const DateWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`
export const Link = styled.li`
  text-decoration: none;
  list-style-type: none;

  cursor: pointer;

  font-size: ${({ theme }) => theme.FONT_SIZE.rgl};
  color: ${({ theme }) => theme.COLORS.black};
  line-height: 1.3rem;

  text-transform: uppercase;
  transition: 0.2s ease-in-out;

  border-top: 2px solid ${({ theme }) => theme.COLORS.gray};
  border-bottom: 2px solid ${({ theme }) => theme.COLORS.gray};

  padding: 1rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  &:hover {
    color: ${({ theme }) => theme.COLORS.orange_red};
  }
`
export const LiRelative = styled.li`
  position: relative;
`
export const NewsMenu = styled.ul`
  list-style-type: none;
  position: absolute;
  top: 80%;
  width: 100%;
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

  li {
    ${Link} {
      border: none;
      text-transform: none;
    }
  }
`
