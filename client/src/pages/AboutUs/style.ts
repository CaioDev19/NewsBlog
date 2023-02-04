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
  width: 55%;
  min-height: 550px;
  border-radius: 20px;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.notbook}px) {
    width: 100%;
  }
`

export const RightContent = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;

  p {
    line-height: 2rem;
    font-size: 1.2rem;
  }

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.notbook}px) {
    width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.mobile}px) {
    width: 100%;
  }
`
