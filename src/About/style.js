import styled from "styled-components"

export const ContainerAbout = styled.div`
    display: flex;
    flex-direction: column;

    img {
      object-fit: cover;
      width: 100%;
    }
  `

  export const ContentAbout = styled.div`
    margin: 0 2rem 2rem 2rem;
    display: flex;
    flex-direction: column;

    h2 {
      margin: 2rem 0;
    }
  `
  export const ContentBar = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 150px;
    width: 100%;
    background-color: var(--primary-color);
    text-align: center;
    color: white;
    font-size: clamp(1.5rem, 1.5rem + 2vw, 2.7rem);
  `