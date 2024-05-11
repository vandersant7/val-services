import styled from 'styled-components'

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  position: fixed;
  top: 300px;
  right: 0;
  width: 30vw;
  max-height: 80vh;
  background-color: #222;
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;
  font-size: 2rem;
  border-bottom-left-radius: 25px;
  z-index: 998;

  ${({ isOpen }) =>
    isOpen &&
    `
        transform: translateY(0);
        `}

  a {
    color: #eee;
  }
`
