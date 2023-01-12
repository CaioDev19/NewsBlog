import styled from "styled-components"

export const ContentContainer = styled.div`
  width: 80%;
  max-width: 1655px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.mobile}px) {
    width: 90%;
  }
`
