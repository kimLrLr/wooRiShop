import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`

    ${reset}

    *{
        box-sizing: border-box;
    }

    a{
        font-family: "Noto Sans KR", sans-serif;
        text-decoration: none;
        display: block;
        color: #1d1d1d;
    }

    ul, li{
        list-style: none;
    }

    img{
        display: block;
        width: 100%;
    }

    body{
        letter-spacing: -1px;
        word-break: keep-all;
        font-family: "Noto Sans KR", sans-serif !important;
        color: #333;
    }
`;
