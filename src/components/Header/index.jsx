// import doblo from '../../../public/doblo.png'
import { useEffect } from 'react'
import { StyledHeader, StyledText } from './styles'
import ScrollReveal from 'scrollreveal'
// import capa from '../../../public/capa.jpg'

export const Header = () => {
  useEffect(() => {
      ScrollReveal().reveal('.active', {
        duration: 3000,
        distance: '1000px',
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        origin: 'bottom',
        delay: 500,
        reset: true
      });
    }, []);
  
  return (
    <StyledHeader>
      <div>
        <StyledText>
          <h1 className='active'>VAL SERVICES</h1>
          <br />
          <br />
          <span className='active'>SEGURANÇA, QUALIDADE E PONTUALIDADE</span>
        </StyledText>
      </div>
      {/* <StyledImg src={doblo} alt="fiat-doblo" /> */}
    </StyledHeader>
  )
}
