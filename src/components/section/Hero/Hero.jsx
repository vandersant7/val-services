import { FloatingWhatsApp } from '@carlos8a/react-whatsapp-floating-button'
import { HeroContainer, StyledTitle } from './styles'
import avatar from '../../../assets/Logo.svg'

function Hero() {
  return (
    <HeroContainer>
      <StyledTitle>
        <img src={avatar} alt="Logo" />
        <br />
        <span>Segurança, qualidade e pontualidade</span>
      </StyledTitle>
      <FloatingWhatsApp
        phoneNumber="+5571988089662"
        accountName="Val Service"
        avatar={avatar}
        initialMessageByServer='Olá, como podemos ajudar?
        '
        statusMessage='Geralmente responde em menos de 1 hora'
      />
    </HeroContainer>
  )
}

export default Hero
