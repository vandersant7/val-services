import styled from "styled-components";

export const ContainerFooter = styled.div`
    min-height: 10vh;
    padding: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: .3125rem;
    background-color: var(--dark-primary-color);
    color: #eee;
    > span {
        font-weight: 700;

    @media (max-width: 375px) {
        > p {
            font-size: .4rem;
        }
    }
    }`