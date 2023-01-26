import styled from "styled-components"
import { ContentContainer } from "../../../global/styles/ContentContainer"

export const Container = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`
export const UpperContent = styled.div`
  width: 60%;
  height: 570px;
  padding: 0.75rem 0;
  background-color: ${({ theme }) => theme.COLORS.gray};
`
export const InnerWrapper = styled.label<{ noPadding: boolean }>`
  width: 92%;
  height: 100%;

  cursor: ${({ noPadding }) => !noPadding && "pointer"};

  margin: 0 auto;
  padding: ${({ noPadding }) => (noPadding ? "0" : "0 0.75rem")};

  border: 2px dotted ${({ theme }) => theme.COLORS.gray_100};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  position: relative;
`
export const Input = styled.input`
  all: unset;
  width: 0;
  height: 0;
`
export const ImageUploaded = styled.img`
  width: 100%;
  height: 100%;
`
export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.str};
    font-size: ${({ theme }) => theme.FONT_SIZE.lrg};
  }
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
