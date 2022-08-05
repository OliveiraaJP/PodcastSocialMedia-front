import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 200ms ease-in-out 0s;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

::-webkit-scrollbar{
    display: none;
    appearance: none;
}

body{
    font-family: 'Raleway', sans-serif;
    font-weight: 100;


    background: hsla(208, 100%, 33%, 1);

    background: linear-gradient(-90deg, hsla(208, 100%, 33%, 1) 13%, hsla(56, 100%, 95%, 1) 100%);

    background: -moz-linear-gradient(-90deg, hsla(208, 100%, 33%, 1) 13%, hsla(56, 100%, 95%, 1) 100%);

    background: -webkit-linear-gradient(-90deg, hsla(208, 100%, 33%, 1) 13%, hsla(56, 100%, 95%, 1) 100%);

//filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#B13E35", endColorstr="#226F54", GradientType=1 );
}
`;

export default GlobalStyle;
