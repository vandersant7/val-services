import { Header } from '../../components/Header'
import { NavBar } from '../../components/NavBar'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <FloatingWhatsApp 
      phoneNumber='+5571988089662'
      accountName='Val Services'
      />
    </>
  )
}
