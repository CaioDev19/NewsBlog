import styled from "styled-components"
import { Text } from "../../../global/styles/Typography"
import { Button as B } from "../../../global/styles/Button"
import { Input as SInput } from "../../../components/Form/Input"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const UpperContent = styled.div`
  width: 100%;
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
export const Input = styled(SInput)`
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
  justify-content: space-between;
  align-items: center;
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
