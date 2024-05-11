import styled from 'styled-components'

export const Container = styled.div`
  position: sticky;
  height: 6.5vh;
  width: 100vw;
  background-color: #121212;
  color: #eee;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`

export const ContainerNav = styled.div`
  padding: 10px;
  display: flex;
  gap: 2rem;
  color: #eee;
  font-size: 1.4rem;

  a {
    color: #eee;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const BtnHamburger = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  right: 18px;
  z-index: 999;

  @media (min-width: 769px) {
    display: none;
  }
`
