import styled from "styled-components"
import { ContentContainer } from "../../../global/styles/ContentContainer"
import { Text } from "../../../global/styles/Typography"

export const AdContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.25rem;
  width: 50%;
`
export const MainContainer = styled(ContentContainer)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2.5rem;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.notbook}px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${AdContainer} {
      width: 100%;
    }
  }
`
export const Ad = styled.img`
  width: 480px;
  height: 380px;
  object-fit: cover;
  border-radius: 25px;
`
export const MoreNews = styled(Ad)`
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.tablet}px) {
    transform: none;
  }
`

export const SubTittle = styled(Text)`
  text-transform: uppercase;
  border-bottom: 2px solid;
  border-image: linear-gradient(
      to right,
      ${({ theme }) => theme.COLORS.blue_100},
      ${({ theme }) => theme.COLORS.light_blue}
    )
    1;
  align-self: flex-start;
  width: 100%;
`
