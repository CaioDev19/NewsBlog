import styled, { css } from "styled-components"
import { ContentContainer } from "../../global/styles/ContentContainer"

export const NewsContainer = styled.div<{ primary?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  ${({ primary }) => {
    return (
      primary &&
      css`
        align-items: center;
        margin: 0 auto;
      `
    )
  }}
`
export const MainContainer = styled(ContentContainer)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.tablet}px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`
export const Add = styled.img`
  width: 480px;
  border-radius: 25px;
`
