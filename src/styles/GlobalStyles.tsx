import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-size: 16px;
        font-family: sans-serif;
        color: ${({theme}) => theme.colors.textDark};
        background-color: ${({theme}) => theme.colors.background};
    }

`;