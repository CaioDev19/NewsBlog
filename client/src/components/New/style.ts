import styled from "styled-components"

export const New = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.mobile}px) {
    flex-direction: column;
  }
`
export const NewImage = styled.img`
  border-radius: 25px;
  object-fit: cover;
  width: 180px;
  height: 120px;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.mobile}px) {
    width: 100%;
    height: 230px;
  }
`

export const NewInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 55%;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.mobile}px) {
    width: 100%;
  }
`
