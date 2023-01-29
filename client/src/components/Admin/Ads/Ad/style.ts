import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.25rem;

  position: relative;
`
export const AdImage = styled.img`
  width: 550px;
  height: 300px;
  border-radius: 25px;
  object-fit: cover;
`
export const Trash = styled.div`
  position: absolute;
  bottom: 0.75em;
  right: 1rem;

  background-color: ${({ theme }) => theme.COLORS.white};
  padding: 0.75rem 1rem;

  border-radius: 50%;

  svg {
    cursor: pointer;
  }
`
