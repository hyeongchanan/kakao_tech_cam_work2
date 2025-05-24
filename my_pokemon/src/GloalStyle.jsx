import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'GSC';
        src: url('../src/assets/font/gsc.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    *{
        box-sizing: border-box;
    }

    body {    
        font-family: 'GSC', sans-serif;
        display: flex;
        justify-content: center;
        text-align: center;
    }

    #root{
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
        text-align: center;
    }

    img {
        overflow-clip-margin: content-box;
        overflow: clip;
    }

    div{
        width: 100%;
    }



`

export default GlobalStyle;