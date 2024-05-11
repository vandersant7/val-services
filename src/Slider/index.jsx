import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import img1 from '../assets/imagem1.jpg'
import img2 from '../assets/imagem2.jpg'
import img3 from '../assets/imagem3.jpg'
import img4 from '../assets/imagem4.jpg'
import { StyledSlider } from './styles'

const Slider = () => {
  const images = [img1, img2, img3, img4]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, images.length])

  return (
    <StyledSlider>
      <div className="slider-image">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>
    </StyledSlider>
  )
}

export default Slider
