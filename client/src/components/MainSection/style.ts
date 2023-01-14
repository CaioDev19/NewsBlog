import styled from "styled-components"
import { ContentContainer } from "../../global/styles/ContentContainer"

export const MainContainer = styled(ContentContainer)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2.5rem;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.notbook}px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.notbook}px) {
    border-top: 1px dotted ${({ theme }) => theme.COLORS.black};
    width: 100%;
    align-items: center;
    padding-top: 2.5rem;
  }
`
export const Ad = styled.img`
  width: 480px;
  border-radius: 25px;
`
