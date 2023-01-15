import styled from "styled-components"

export const TrashCanContainer = styled.div`
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
