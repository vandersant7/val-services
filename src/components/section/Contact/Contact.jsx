import { FaAddressCard, FaWhatsapp } from 'react-icons/fa'
import { ContactInfo, ContainerContact } from './styles'
import { MdEmail } from 'react-icons/md'

function Contact() {
  return (
    <ContainerContact id='contact'>
      <h2>Fale conosco</h2>
      <ContactInfo>
        <div className='info-detail'>
          <FaWhatsapp size={25} />
          <span>(71) 98808-9662</span>
        </div >

        <div className='info-detail'>
          <FaAddressCard size={25} />
          <span>Endereço: </span>
        </div>

        <div className='info-detail'>
          <MdEmail size={25} />
          <span>valservice@gmail.com <br />
            dermeval.almeida@hotmail.com
          </span>
        </div>
      </ContactInfo>
    </ContainerContact>
  )
}

export default Contact
