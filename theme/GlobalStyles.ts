import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  ${normalize};
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  html {
    font-size: 10px;
  }
  
  body {
    font-size: 1.6rem;
    font-family: 'Raleway', sans-serif;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.foreground};
  }
  
  html.no-js .with-background, html.no-webp .with-background {
    background: url("/background.jpg") repeat-y fixed;

    @media (max-width: 1024px) {
      background: url("/background-1024.jpg") repeat-y;
    }

    @media (max-width: 500px) {
      background: url("/background-500.jpg") repeat-y;
    }
  }
  
  html.webp .with-background {
    background: url("/background.webp") repeat-y fixed;
    
    @media (max-width: 1024px) {
      background: url("/background-1024.webp") repeat-y;
    }
    
    @media (max-width: 500px) {
      background: url("/background-500.webp") repeat-y;
    }
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  p {
    line-height: 2;
  }
  
  .c-scrollbar_thumb {
    background:  ${({ theme }) => theme.secondary};
  }
`;
