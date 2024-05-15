import styled from "styled-components";

export const ContainerContact = styled.div`
    background-color: var(--dark-primary-color);
    color: #e1e1e1;
    min-height: 30vh;
    padding: 5% 10%;

    h2 {
        font-size: 2.5rem;
    }
`

export const ContactInfo = styled.div`
    margin-top: 1rem;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .info-detail{
        display: flex;
        align-items: center;
        gap: 10px;
    }
`