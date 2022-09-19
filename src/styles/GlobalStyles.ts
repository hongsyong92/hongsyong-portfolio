import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Fira Code', monospace, "Pretendard", sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: ${theme.baseFontColor};
    background-color: #000;
  }
  button {
    background: inherit; 
    border: none; 
    box-shadow: none; 
    border-radius: 0; 
    padding: 0; 
    overflow: visible;
    cursor: pointer;
  }
  a {
    color: ${theme.baseFontColor};
    text-decoration: none; 
    outline: none;
  }
  a:hover, a:active {
    text-decoration: none; 
    color:#fff; 
  }
`;

export default GlobalStyle;
