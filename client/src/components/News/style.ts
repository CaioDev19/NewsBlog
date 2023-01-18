import styled from "styled-components"
import { ContentContainer } from "../../global/styles/ContentContainer"

export const NewsContainer = styled(ContentContainer)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.8rem;
`
export const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`
export const Ad = styled.img`
  width: 480px;
  border-radius: 25px;
`
export const ArrowsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const Arrow = styled.button`
  all: unset;
  cursor: pointer;
  box-sizing: border-box;

  svg {
    cursor: pointer;
    font-size: ${({ theme }) => theme.FONT_SIZE.exl};
    transition: 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.COLORS.orange_red};
    }
  }
`
