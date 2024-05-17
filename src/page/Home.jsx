import About from '../components/section/About/About'
import Contact from '../components/section/Contact/Contact'
import Footer from '../components/section/Footer/Footer'
import Hero from '../components/section/Hero/Hero'
import Portifolio from '../components/section/Portifolio/Portifolio'
import Services from '../components/section/Services/Services'
'react-floating-whatsapp2'

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Portifolio />
      <Contact />
      <Footer />

    </>
  )
}

export default HomePage
