import { ContentContainer } from "../../global/styles/ContentContainer"
import styled from "styled-components"

export const Container = styled(ContentContainer)`
  display: flex;
  align-items: center;
  gap: 2.25rem;
  margin-top: 2rem;
  min-height: 800px;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.notbook}px) {
    flex-direction: column;
  }
`
export const Image = styled.img`
  width: 50%;
  max-height: 625px;
  border-radius: 20px;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.notbook}px) {
    width: 100%;
    max-height: 450px;
  }
`

export const RightContent = styled.div`
  width: 50%;
  max-width: 750px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.notbook}px) {
    width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.mobile}px) {
    width: 100%;
  }
`
