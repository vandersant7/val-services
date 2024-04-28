import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import imagem1 from '../assets/imagem1.jfif'
import imagem2 from '../assets/imagem2.jfif'
import imagem3 from '../assets/imagem3.jfif'
import imagem4 from '../assets/imagem4.jfif'

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  @media (max-width:768px) {
    grid-template-columns: 1fr;
  }
`

const GalleryItem = styled(motion.div)`
  cursor: pointer;
`

const StyledImg = styled(motion.img)`
  width: 70%;
  height: auto;
  border-radius: 10px;
`

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`

const ModalImg = styled(motion.img)`
  max-width: 80%;
  max-height: 80%;
`

export const Card = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageClick = (img) => {
    setSelectedImage(img)
  }

  const handleModalClose = () => {
    setSelectedImage(null)
  }

  const images = [
    { src: imagem1, alt: 'Image 1' },
    { src: imagem2, alt: 'Image 2' },
    { src: imagem3, alt: 'Image 3' },
    { src: imagem4, alt: 'Image 4' },
    
  ]

  return (
    <GalleryContainer>
      {images.map((image, index) => (
        <GalleryItem
          key={index}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleImageClick(image)}
        >
          <StyledImg src={image.src} alt={image.alt} />
        </GalleryItem>
      ))}

      <AnimatePresence>
        {selectedImage && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleModalClose}
          >
            <ModalImg
              src={selectedImage.src}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
            />
          </Modal>
        )}
      </AnimatePresence>
    </GalleryContainer>
  )
}
