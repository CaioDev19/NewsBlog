import styled from "styled-components"

export const StyledInput = styled.input`
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
