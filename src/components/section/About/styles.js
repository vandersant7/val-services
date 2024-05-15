import { styled } from 'styled-components'

export const AboutContainer = styled.div`
    background-color: #eee;
    margin-top: 3rem;
    transition: .5s ease-in;

  > h2 {
    padding: 3rem;
    font-size: 2.5rem;
    text-align: center;
  }
`

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;

  .item {
    padding: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
  }

  h2 {
    margin: 1rem 0;
  }

  p {
    margin: 2rem 0;
  }

  img {
    margin-bottom: 1rem;
    width: 100%;
    object-fit: cover;
  }
`

export const ImgBackground = styled.div`
  margin: 1rem 0;
  height: 100%;
  width: 100%;
  background: url(${(props) => props.img}) center center no-repeat;
  background-size: cover;
`
