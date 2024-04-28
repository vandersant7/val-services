import styled from 'styled-components'
import { Card } from '../../components/Card'

const About = () => {
  const StyledAbout = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 2rem 1rem;
    background-color: #e8f1f2;
    min-height: 100vh;
    font-size: 2rem;
    text-align: center;
    gap: 1.25rem;
  `

  const StyledCard = styled.div`
    display: flex;
    flex-direction: row;
  `
  return (
    <StyledAbout id="about">
      <h2>Sobre</h2>
      <br />
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          maiores nobis consequatur delectus, vitae ad minus magni
          necessitatibus atque! Voluptas saepe maxime nemo delectus porro labore
          sapiente doloremque perferendis ullam?
        </p>
      </div>
        <StyledCard>
            <Card />
        </StyledCard>
      
    </StyledAbout>
  )
}

export default About
