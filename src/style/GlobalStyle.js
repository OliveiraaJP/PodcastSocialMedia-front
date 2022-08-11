import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 200ms ease-in-out 0s;
    scrollbar-width: none;
    -ms-overflow-style: none;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
}

::-webkit-scrollbar{
    display: none;
    appearance: none;
}

body{
    font-family: 'Raleway', sans-serif;
    font-weight: 100;


    background: #C0C0C0;
}
`;

export default GlobalStyle;
