import { Placeholder } from "react-bootstrap"
import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Image = styled.img`
  width: 60%;
  min-width: 320px;
  border-radius: 25px;
  object-fit: cover;
  max-height: 450px;
  flex-grow: 1;
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.notbook}px) {
    width: 100%;
    height: 230px;
  }
`
export const ContainerPlaceholder = styled(Placeholder)`
  width: 60%;
  min-height: 450px;
  flex-grow: 1;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.notbook}px) {
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.mobile}px) {
    min-height: 300px;
  }
`
export const ImagePlaceholder = styled(Placeholder)`
  width: 100%;
  min-height: 450px;
  border-radius: 25px;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.notbook}px) {
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.mobile}px) {
    min-height: 300px;
  }
`
