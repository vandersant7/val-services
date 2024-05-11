// import doblo from '../../../public/doblo.png'
import { StyledHeader, StyledText } from './styles'
// import capa from '../../../public/capa.jpg'

export const Header = () => {
  return (
    <StyledHeader>
      <div>
        <StyledText>
          <h1>VAL SERVICES</h1>
          <br />
          <br />
          <span>SEGURANÇA, QUALIDADE E PONTUALIDADE</span>
        </StyledText>
      </div>
      {/* <StyledImg src={doblo} alt="fiat-doblo" /> */}
    </StyledHeader>
  )
}
