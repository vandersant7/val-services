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

:root{
    --dark-primary-color: #292933;
    --dark-secondary-color: #31313B;

    --blue-soft-color: #2A27E6;
    --blue-medium-color: #413FBA;

    --violet-dark-color: #454466;
    --violet-medium-color: #4A4991;
}
`