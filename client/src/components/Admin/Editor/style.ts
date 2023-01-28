import styled from "styled-components"

export const Editor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 500px;
  width: 100%;
`

export const QuillContentContainer = styled.div`
  .ql-editor {
    padding: 0;
  }
  p {
    font-size: ${({ theme }) => theme.FONT_SIZE.lrg} !important;
  }
  span {
    font-size: ${({ theme }) => theme.FONT_SIZE.lrg} !important;
  }
  h1 {
    font-size: ${({ theme }) => theme.FONT_SIZE.exl} !important;
  }
  h2 {
    font-size: ${({ theme }) => theme.FONT_SIZE.lrg} !important;
  }
  h3 {
    font-size: ${({ theme }) => theme.FONT_SIZE.lrg} !important;
  }
  h4 {
    font-size: ${({ theme }) => theme.FONT_SIZE.lrg} !important;
  }
  h5 {
    font-size: ${({ theme }) => theme.FONT_SIZE.lrg} !important;
  }
  h6 {
    font-size: ${({ theme }) => theme.FONT_SIZE.lrg} !important;
  }
  ul {
    font-size: ${({ theme }) => theme.FONT_SIZE.lrg} !important;
  }
  ol {
    font-size: ${({ theme }) => theme.FONT_SIZE.lrg} !important;
  }
  li {
    font-size: ${({ theme }) => theme.FONT_SIZE.lrg} !important;
  }
  a {
    font-size: ${({ theme }) => theme.FONT_SIZE.lrg} !important;
  }

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.mobile}px) {
    p {
      font-size: ${({ theme }) => theme.FONT_SIZE.rgl} !important;
    }
    span {
      font-size: ${({ theme }) => theme.FONT_SIZE.rgl} !important;
    }
    h1 {
      font-size: ${({ theme }) => theme.FONT_SIZE.rgl} !important;
    }
    h2 {
      font-size: ${({ theme }) => theme.FONT_SIZE.rgl} !important;
    }
    h3 {
      font-size: ${({ theme }) => theme.FONT_SIZE.rgl} !important;
    }
    h4 {
      font-size: ${({ theme }) => theme.FONT_SIZE.rgl} !important;
    }
    h5 {
      font-size: ${({ theme }) => theme.FONT_SIZE.rgl} !important;
    }
    h6 {
      font-size: ${({ theme }) => theme.FONT_SIZE.rgl} !important;
    }
    ul {
      font-size: ${({ theme }) => theme.FONT_SIZE.rgl} !important;
    }
    ol {
      font-size: ${({ theme }) => theme.FONT_SIZE.rgl} !important;
    }
    li {
      font-size: ${({ theme }) => theme.FONT_SIZE.rgl} !important;
    }
    a {
      font-size: ${({ theme }) => theme.FONT_SIZE.rgl} !important;
    }
  }
`
