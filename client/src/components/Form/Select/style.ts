import styled from "styled-components"

export const StyledSelect = styled.select`
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
