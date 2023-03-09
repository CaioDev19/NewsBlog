import { Card } from "react-bootstrap"
import styled from "styled-components"

export const CardStyled = styled(Card)`
  width: 70%;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.notbook}px) {
    width: 100%;
  }
`
