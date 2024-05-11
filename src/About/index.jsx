import styled from 'styled-components'
import foto1 from '../../public/imagem1.jfif'

export const About = () => {
  const ContainerAbout = styled.div`
    display: flex;
    flex-direction: column;

    img {
      object-fit: cover;
      width: 100%;
    }
  `

  const ContentAbout = styled.div`
    margin: 0 2rem 2rem 2rem;
    display: flex;
    flex-direction: column;

    h1 {
      margin: 2rem 0;
    }
  `
  const ContentBar = styled.div`
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

  const ContentImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    img {
      max-width: 80%;
    }
  `

  return (
    <>
      <ContentBar>
        <span>
          Transporte seguro e confortável de passageiros para diversas
          finalidades.
        </span>
      </ContentBar>
      <ContainerAbout>
        <ContentAbout>
          <div>
            <h1>QUEM SOMOS</h1>
          </div>
          <p>
            A Val Services é uma empresa de fretamento de passageiros que opera
            há mais de 13 anos no mercado. Fundada em 2011, a empresa se
            especializou no transporte fretado por grupos e corporações,
            oferecendo soluções personalizadas e confiáveis para atender às
            necessidades de diferentes clientes.
          </p>
        </ContentAbout>

        <ContentImg>
          <img src={foto1} alt="Motoristas em frente a seus veículos" />
        </ContentImg>
      </ContainerAbout>
    </>
  )
}
