import styled from 'styled-components'

export const StyledHeader = styled.div`
  min-height: 95vh;
  padding: 1rem;
  width: 100%;
  height: 100%;
  background: url('../../../public/capa.jpg') no-repeat center center;
  background-size: cover;
  position: relative;
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: soft-light;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4); // Ajuste a opacidade conforme necessário
    backdrop-filter: blur(5px); // Aplicar o blur na sobreposição
  }

  span {
    font-size: clamp(3rem, 3rem + 3vw, 4rem);
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }
`

export const StyledText = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 1000;
  color: white; // Definir a cor do texto para branco
  padding: 2rem;
  /* max-width: 400px; */

&& h1 {
  font-size: clamp(3rem, 3rem + 3vw, 4rem);
}
`

export const StyledImg = styled.img`
  max-width: 100%;
  object-fit: cover;
`
