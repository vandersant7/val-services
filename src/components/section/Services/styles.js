import styled from 'styled-components'

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
  grid-gap: 1rem;
  place-items: center;
  justify-content: stretch;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`

export const ContentServices = styled.div`
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
