import styled from "styled-components"
import { ContentContainer } from "../../global/styles/ContentContainer"

export const Container = styled(ContentContainer)`
  display: flex;
  margin-top: 2rem;
  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.tablet}px) {
    flex-direction: column;
    gap: 5rem;
  }
  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.mobile}px) {
    gap: 7rem;
  }
`
