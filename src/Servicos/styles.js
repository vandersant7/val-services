import styled from "styled-components";

export const ContainerServices = styled.div`
    padding: 2rem;
    height: 100vh;
    background-color: var(--secondary-color);
    display: flex;
    align-items: center;
    flex-direction: column;

    h2 {
        color: #e2e2e2;
        font-size: clamp(1rem, 1.5rem + 1vw, 2rem);
    }
`

export const ContantServices = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`