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
    background: url("background.jpg") repeat;
    color: ${({ theme }) => theme.foreground};
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;
