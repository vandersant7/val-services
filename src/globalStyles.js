import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    ol, a {
        list-style: none;
        text-decoration: none;
    }

    :root {
        --nav-color: #222222;
        --primary-color: #292929;
        --secondary-color: #4E5052;
        --third-color: #444444;
        --box-color: #f9f9f9;
        --footer-color: #2a2a2a;
    }
`