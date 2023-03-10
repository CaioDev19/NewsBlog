import styled from "styled-components"
import { Input } from "../components/Form/Input"
import { Button } from "../global/styles/Button"
import NextLink from "next/link"
import NextImage from "next/image"

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.COLORS.white},
    ${({ theme }) => theme.COLORS.black_100}
  );
`
export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.COLORS.white};
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.6);
  border-radius: 25px;
  padding: 0rem 1.25rem 2.75rem 1.25rem;
  width: 40%;
  min-width: 300px;
  max-width: 500px;

  display: flex;
  flex-direction: column;
  gap: 1.85rem;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.mobile}px) {
    padding: 3rem 1.25rem;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  position: relative;
`
export const Logo = styled(NextImage)`
  height: auto;
  width: 15%;
  min-width: 200px;
  margin: 0 auto;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  justify-content: center;
  gap: 1.8rem;
`
export const SInput = styled(Input)`
  border-radius: 15px;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.mobile}px) {
    padding: 0.7rem 1rem;
  }
`
export const SButton = styled(Button)`
  width: 100%;
  padding: 1.5rem 1rem;
  font-size: ${({ theme }) => theme.FONT_SIZE.lrg};

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.mobile}px) {
    padding: 1.2rem 0.5rem;
    font-size: ${({ theme }) => theme.FONT_SIZE.rgl};
  }
`
export const Link = styled(NextLink)`
  all: unset;
  cursor: pointer;
  box-sizing: border-box;
  text-decoration: underline;
  transition: 0.2s ease-in-out;
  &:hover {
    opacity: 0.6;
  }
`
