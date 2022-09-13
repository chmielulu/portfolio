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
    background: repeat-y url("background.jpg");
    background-size: contain;
    color: ${({ theme }) => theme.foreground};
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  p {
    line-height: 2;
  }
`;
