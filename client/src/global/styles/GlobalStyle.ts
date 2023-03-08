import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Rubik', sans-serif;
    background-color: ${({ theme }) => theme.COLORS.white};
  }

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.mobile}px) {
    html {
      font-size: ${({ theme }) => theme.FONT_SIZE.sml};
    }
  }
`
