import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}
body{
    font-family: 'Raleway', sans-serif;
    font-weight: 100;
    background-color: #0CA9A9;
}
`;

export default GlobalStyle;