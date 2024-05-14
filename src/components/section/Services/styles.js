import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 30vh;

    h2 {
        margin: 3rem;
        font-size: 2.5rem;
    }
`

export const ContainerServices = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid: 1rem;
    place-items: center;
    justify-content: stretch;

    @media (max-width: 576px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
    }
`

export const ContentServices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`