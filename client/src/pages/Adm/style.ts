import styled from "styled-components"

export const Container = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.tablet}px) {
    flex-direction: column;
    gap: 3rem;
  }
`
