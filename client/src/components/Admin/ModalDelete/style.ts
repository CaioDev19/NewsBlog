import styled from "styled-components"
import { Colors } from "../../../global/theme"

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

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
export const Button = styled.button<{ color?: Colors }>`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 7rem;
  padding: 0.5rem 1.25rem;
  background-color: ${({ theme, color }) =>
    theme.COLORS[color || "orange_red"]};

  border-radius: 25px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  outline: none;
`
