import Slider from '../Slider'
import { ContainerAbout, ContentAbout, ContentBar } from './style'

export const About = () => {
  return (
    <>
      <ContentBar>
        <span>
          Transporte seguro e confortável de passageiros para diversas
          finalidades.
        </span>
      </ContentBar>
      <Slider />
      <ContainerAbout>
        <ContentAbout>
          <div>
            <h2>QUEM SOMOS</h2>
          </div>
          <p>
            A Val Services é uma empresa de fretamento de passageiros que opera
            há mais de 13 anos no mercado. Fundada em 2011, a empresa se
            especializou no transporte fretado por grupos e corporações,
            oferecendo soluções personalizadas e confiáveis para atender às
            necessidades de diferentes clientes. Um dos diferenciais da Val
            Services é o seu compromisso com a excelência no atendimento e a
            segurança dos passageiros. A empresa investe constantamente na
            capacitação de seus motoristas, que são treinados para oferecer um
            serviço de alto nível, com pontualidade, conforto e atenção aos
            detalhes. Além disso, a frota é submetida a rigorosas manutenções
            preventivas, garantindo a segurança e o bem-estar dos clientes
            durante os deslocamentos.
            <br />
            <br />
            Ao longo desses 13 anos de atuação, a Val Services conquistou a
            confiança de diversas empresas, instituições e organizaçãoes em
            Salvador e região metropolitana. Seu portifólio de clientes inclui
            multinacionais, empresas de grande porte, entre outros. Essa
            diversidade de clientes atendidos demonstra a versatilidade e a
            capacidade da empresa em oferecer soluções de fretamento adaptados a
            diferentes necessidades.
            <br />
            <br />
            Em resumo, a Val Services preza sempre pela segurança e qualidade do
            serviço, com manutenção regular da frota treinamento de seus
            colabodores. Com mais de 13 anos de experiência, motoristas
            capacitados e um compromisso com a excelência no atendimento e a
            segurança dos clientes.
          </p>
        </ContentAbout>

        {/* <ContentImg>
          <img src={foto1} alt="Motoristas em frente a seus veículos" />
        </ContentImg> */}
      </ContainerAbout>
    </>
  )
}
