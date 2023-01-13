import styled from "styled-components"
import { ContentContainer } from "../../global/styles/ContentContainer"

export const NewsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
`
export const MainContainer = styled(ContentContainer)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

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
export const Ad = styled.img`
  width: 480px;
  border-radius: 25px;
`
