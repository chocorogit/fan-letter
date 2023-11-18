import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
  body {
    background-color: black;
    color: white; 
  }
    :focus {
        outline: none; 
        border-color: #f7a7bb;
        box-shadow: 0 0 8px #f7a7bb;
    }
`;

export default GlobalStyle;
