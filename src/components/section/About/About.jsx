import { AboutContainer, AboutContent } from './styles'
import img1 from '../../../assets/imagem3.jpg'
import img2 from '../../../assets/imagem4.jpg'

function About() {
  return (
    <AboutContainer id='about'>
      <h2>Sobre nós</h2>
      <AboutContent>
      <div className="item">
        <h2>A empresa</h2>
        <p>
          A Val Services é uma empresa de fretamento de passageiros que opera há
          mais de 13 anos no mercado. Fundada em 2011, a empresa se especializou
          no transporte fretado por grupos e corporações, oferecendo soluções
          personalizadas e confiáveis para atender às necessidades de diferentes
          clientes. Um dos diferenciais da Val Services é o seu compromisso com
          a excelência no atendimento e a segurança dos passageiros.
        </p>
        <img src={img2} alt={`${img2}`} />
      </div>
      <div className="item">
        <img src={img1} alt={`${img1}`} />
        <h2>Treinamento</h2>
        <p>
          A empresa investe constantamente na capacitação de seus motoristas,
          que são treinados para oferecer um serviço de alto nível, com
          pontualidade, conforto e atenção aos detalhes. Além disso, a frota é
          submetida a rigorosas manutenções preventivas, garantindo a segurança
          e o bem-estar dos clientes durante os deslocamentos.
        </p>
      </div>
      </AboutContent>
      
    </AboutContainer>
  )
}

export default About
