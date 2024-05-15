import { styled } from 'styled-components'
import capa from  '../../../assets/capa.jpg'

export const HeroContainer = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${capa}) center center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;

  @media (max-width: 425px) {
    height: 70vh;
  }
`

export const StyledCover = styled.div`
  position: relative;
  background-color: #222;

  img {
    position: relative;
    width: 100%;
    object-fit: cover;
    z-index: 0;
    opacity: 0.7;
    filter: blur(5px);
  }
`

export const StyledTitle = styled.div`
  padding: 2rem;
  display: flex;
  height: 70vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  z-index: 7777;
  text-align: center;

  h1 {
    font-size: clamp(1.5rem, 2em + 7vw, 7rem);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    color: #eee;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }

  span {
    font-size: clamp(1rem, 1em + 2vw, 4rem);
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`
