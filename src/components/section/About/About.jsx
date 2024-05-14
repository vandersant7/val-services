import { AboutConctainer } from './styles'
import img1 from '../../../assets/imagem3.jpg'
import img2 from '../../../assets/imagem4.jpg'

function About() {
  return (
    <AboutConctainer>
      <div className="item">
        <h2>Sobre nós</h2>
        <p>
          A Val Services é uma empresa de fretamento de passageiros que opera há
          mais de 13 anos no mercado. Fundada em 2011, a empresa se especializou
          no transporte fretado por grupos e corporações, oferecendo soluções
          personalizadas e confiáveis para atender às necessidades de diferentes
          clientes. Um dos diferenciais da Val Services é o seu compromisso com
          a excelência no atendimento e a segurança dos passageiros.
        </p>
        {/* <ImgBackground img={img2} /> */}
        <img src={img2} alt={`${img2}`} />
      </div>
      <div className="item">
        {/* <ImgBackground img={img1} /> */}
        <img src={img1} alt={`${img1}`} />
        <h2>Sobre nós</h2>
        <p>
          A empresa investe constantamente na capacitação de seus motoristas,
          que são treinados para oferecer um serviço de alto nível, com
          pontualidade, conforto e atenção aos detalhes. Além disso, a frota é
          submetida a rigorosas manutenções preventivas, garantindo a segurança
          e o bem-estar dos clientes durante os deslocamentos.
        </p>
      </div>
    </AboutConctainer>
  )
}

export default About
