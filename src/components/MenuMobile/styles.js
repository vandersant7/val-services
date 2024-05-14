import styled from 'styled-components'

export const MenuContainer = styled.div`
  position: absolute;
  display: flex;
  flex-flow: nowrap;
  flex-direction: column;
  width: 300px;
  gap: 2rem;
  padding: 2rem;
  top: 73px;
  right: 0;
  max-height: 80vh;
  background-color: #121212;
  transform: translateX(0%);
  transition: transform 0.5s ease-in-out;
  font-size: 2rem;
  border-bottom-left-radius: 25px;
  z-index: 9999;

  ${({ isOpen }) =>
    isOpen &&
    `
        transform: translateX(100);
        `}

  a {
    color: #eee;
    padding: 20px;
  }

  
  `