import styled from "styled-components"

export const UpperContent = styled.div`
  width: 100%;
  height: 570px;
  padding: 0.75rem 0;
  align-self: stretch;
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

export const SInput = styled.input<{
  size?: string
}>`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.black_400};
  padding: 1.25rem 0;
  font-weight: 400;
  &::placeholder {
    text-decoration: none;
    font-weight: 900;
    font-size: ${({ theme }) => theme.FONT_SIZE.rgl};
    color: ${({ theme }) => theme.COLORS.black};
    line-height: 2.1rem;
    opacity: 0.7;
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.COLORS.black_400};
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
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

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  background-color: ${({ theme }) => theme.COLORS.orange_red};
  color: white;
  border-radius: 30px;
  padding-left: 1.65em;
  padding-right: 1.65em;
  min-width: 121.5px;

  display: flex;
  justify-content: center;
  align-items: center;
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
