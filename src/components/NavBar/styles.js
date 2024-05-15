import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  min-height: 75px;
  padding: 20px 40px;
  width: 100vw;
  background-color: #121212;
  color: #eee;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 9999;

  .img {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 2rem;
    width: 50px;
    height: auto;

    img {
      max-width: 100%;
    }
  }
`

export const ContainerNav = styled.div`
  padding: 10px;
  display: flex;
  gap: 2rem;
  color: #eee;
  font-size: 1.4rem;

  a {
    color: #eee;
    padding: 0.6rem 1rem;
    transition: 0.1s ease-in-out;

    &:hover {
      padding: 1rem;
      background-color: #eee;
      color: #222;
      border-radius: 35px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const BtnHamburger = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  right: 18px;
  z-index: 999;
  transition: .2s ease-in;

  @media (min-width: 769px) {
    display: none;
  }
`
