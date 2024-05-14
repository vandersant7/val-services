import { createGlobalStyle } from "styled-components";

export const Globalstyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    html, body {
        overflow-x: hidden;
    }


    ul, ol, a {
        text-decoration: none;
        list-style: none;
    }

    img {
    max-width: 100%;
}
`