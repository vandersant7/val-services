import styled from "styled-components";

export const ContainerContact = styled.div`
    background-color: #121212;
    color: #e1e1e1;
    min-height: 30vh;
    padding: 5% 10%;
    position: relative;

    h2 {
        font-size: 2.5rem;
    }
`

export const ContactInfo = styled.div`
    margin-top: 1rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    left: 7rem;

    .info-detail{
        display: flex;
        align-items: center;
        gap: 10px;
    }
`