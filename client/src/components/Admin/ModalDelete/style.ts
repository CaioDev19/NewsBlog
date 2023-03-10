import styled from "styled-components"
import { Button } from "../../../../global/styles/Button"

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 6;
`

export const Container = styled.div`
  position: fixed;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 7;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`
export const SButton = styled(Button)`
  padding: 0.75em 2.25em;

  @media (max-width: 768px) {
    padding: 0.5em 2em;
    width: 8rem;
  }
`
