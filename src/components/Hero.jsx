import styled from 'styled-components'
import doblo from '../assets/doblo.png'

const Hero = () => {
  const StyledHero = styled.div`
    min-height: 95vh;
    padding: 2rem 1rem;
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;


    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3rem;
      
    }
  `

  const StyledImg = styled.img`
    width: 100%;
    object-fit: cover;
  `
  return (
    <StyledHero>
      <div>
        <h1>VAL SERVICES</h1>
        <br />
        <span>Transportando com qualidade, pontualidade e segurança!</span>
      </div>
      <StyledImg src={doblo} alt="fiat-doblo" />
    </StyledHero>
  )
}

export default Hero
