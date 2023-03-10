import styled from "styled-components"
import { Button } from "../global/styles/Button"
import { ContentContainer } from "../global/styles/ContentContainer"

export const Container = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  max-width: 1147px;
  width: 100%;
`
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.75rem;
`
export const WrapperErrorButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.3rem;
  width: 100%;
  max-width: 500px;

  ${Button} {
    width: 100%;
  }
`
export const AdsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.25rem;
`
export const Ad = styled.div`
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
  cursor: pointer;
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
export const ArrowsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1147px;
`
