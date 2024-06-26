import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`

    ${reset}

    *{
        box-sizing: border-box;
    }

    img{
        display: block;
        width: 100%;
    }

    body{
        letter-spacing: -1px;
        word-break: keep-all;
        font-family: "Noto Sans KR", sans-serif !important;
    }
`;
