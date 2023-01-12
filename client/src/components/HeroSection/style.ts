import styled from "styled-components"
import { ContentContainer } from "../../global/styles/ContentContainer"
import { Text } from "../../global/styles/Typography"

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.gray_100};
  padding: 1.75rem 0;
`
export const ContentWrapper = styled(ContentContainer)`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  flex-direction: column;
`
export const Banner = styled.img`
  width: 100%;
  object-fit: cover;
  max-height: 200px;
  border-radius: 25px;
`

export const LowerContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.75rem;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.tablet}px) {
    flex-direction: column;
  }
`
export const LeftContent = styled.img`
  width: 60%;
  border-radius: 25px;
  object-fit: cover;
  max-height: 450px;
  flex-grow: 1;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.tablet}px) {
    width: 100%;
  }
`
export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1.25rem;
  width: 40%;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.tablet}px) {
    width: 100%;
  }
`
export const Title = styled(Text)`
  text-transform: uppercase;
  border-bottom: 2px solid;
  border-image: linear-gradient(
      to right,
      ${({ theme }) => theme.COLORS.orange_red},
      ${({ theme }) => theme.COLORS.gray_100}
    )
    1;
  align-self: flex-start;
  width: 100%;
`
export const NewsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
