import styled from "styled-components"
import { Text } from "../../../global/styles/Typography"
import { Button as B } from "../../../global/styles/Button"

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
export const Input = styled.input`
  all: unset;
  width: 0;
  height: 0;
`

export const SInput = styled.input`
  all: unset;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.COLORS.black};
  font-size: 1em;
  border-radius: 4px;
  padding: 1.25em 1rem;
  height: 4rem;
  width: 100%;
  color: ${({ theme }) => theme.COLORS.black};

  transition: 0.2s ease-in-out;

  &:focus {
    border: 1px solid ${({ theme }) => theme.COLORS.blue};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.COLORS.light_blue};
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.black_200};
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

export const Button = styled(B)`
  width: 100%;
  transition: 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
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
export const Select = styled.select`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;
  background-color: none;
  border: 1px solid ${({ theme }) => theme.COLORS.black};
  border-radius: 5px;
  padding: 1.25rem 1rem;
  font-size: 1rem;
  width: 100%;
  /* Arrow */
  appearance: none;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: right 0.7rem top 50%;
  background-size: 0.65rem auto;
  text-decoration: none;
  font-weight: 400;
  font-size: ${({ theme }) => theme.FONT_SIZE.rgl};
  line-height: 2.1rem;
  transition: 0.2s ease-in-out;

  &:focus {
    border: 1px solid ${({ theme }) => theme.COLORS.blue};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.COLORS.light_blue};
  }

  &:invalid {
    color: ${({ theme }) => theme.COLORS.gray_200};
  }
`
export const Label = styled(Text)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`
