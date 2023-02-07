import styled from "styled-components"

export const Ad = styled.img`
  width: 480px;
  height: 340px;
  object-fit: fill;
  border-radius: 25px;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.mobile}px) {
    height: 230px;
  }
`
