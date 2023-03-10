import styled from "styled-components"
import { Text } from "../../../global/styles/Typography"
import { Button as B } from "../../../global/styles/Button"
import { ContentContainer } from "../../../global/styles/ContentContainer"

export const MainContainer = styled(ContentContainer)`
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
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const LowerContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`
export const Button = styled(B)`
  width: 100%;
`
export const WrapperErrorButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.3rem;
`
export const Form = styled.form`
  width: 100%;
  max-height: 100vh;
  overflow-y: auto;
  flex-grow: 1;
  margin: 0 auto;
  padding: 1.45rem 1rem;

  background-color: ${({ theme }) => theme.COLORS.whitesh};

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`
export const Label = styled(Text)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`
export const Trash = styled.div`
  position: absolute;
  bottom: 0.75em;
  right: 1rem;

  background-color: ${({ theme }) => theme.COLORS.white};
  padding: 0.75rem 1rem;

  border-radius: 50%;
  cursor: pointer;

  svg {
    font-size: ${({ theme }) => theme.FONT_SIZE.sml};
  }
`
