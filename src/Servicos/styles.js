import styled from "styled-components";

export const ContainerServices = styled.div`
    padding: 2rem;
    height: 70vh;
    background-color: var(--primary-color);
    display: flex;
    flex-direction: column;
    color: #e2e2e2;

    h2 {
        font-size: clamp(2rem, 2rem + 2vw, 3rem);
        margin: 2rem 0;
    }
`

export const ContantServices = styled.div`
    h3 {
        margin: 1rem 0;
        font-size: clamp(1.7rem, 1.7rem + 3vw, 2.2rem);
    }

    ul > li {
        font-size: clamp(1.5rem, 1.5rem + 1vw, 1.7rem);
        margin-bottom: 1.5rem;
        margin-left: 1rem;
    }
`