import { HiUserGroup } from 'react-icons/hi2'
import { Container, ContainerServices, ContentServices } from './styles'
import {
  MdEmojiTransportation,
  MdOutlineSecurity,
  MdOutlineWatchLater,
} from 'react-icons/md'

function Services() {
  return (
    <Container>
        <h2>Nossos diferenciais</h2>
    <ContainerServices>
      <ContentServices>
        <HiUserGroup size={50} />
        <span>Fretamento empresarial</span>
      </ContentServices>

      <ContentServices>
        <MdEmojiTransportation size={50} />
        <span>Translados</span>
      </ContentServices>
      <ContentServices>
        <MdOutlineSecurity size={50} />
        <span>Segurança</span>
      </ContentServices>

      <ContentServices>
        <MdOutlineWatchLater size={50} />
        <span>Pontualidade</span>
      </ContentServices>
    </ContainerServices>
    </Container>
  )
}

export default Services
