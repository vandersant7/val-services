import styled from "styled-components";

export const ContainerFooter = styled.div`
    min-height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .3125rem;
    background-color: var(--dark-primary-color);
    color: #eee;
    > span {
        font-weight: 700;
    }
`