import { styled } from 'styled-components'

export const AboutConctainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  background-color: #eee;

  .item {
    padding: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
  }

  h2 {
    margin: 2rem 0;
  }

  p {
    margin: 2rem 0;
  }

  img {
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
