"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { X } from "lucide-react"

export default function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const categories = [
    {
      id: "carros",
      label: "Carros Executivos",
      images: [
        { src: "/images/img2.webp", alt: "Frota de Carros Executivos" },
        { src: "/images/img3.webp", alt: "Carro Executivo" },
        { src: "/images/img4.webp", alt: "Carro Executivo" },
        { src: "/images/img5.webp", alt: "Carro Executivo" },
        { src: "/images/img6.webp", alt: "Carro Executivo" },
        { src: "/images/img7.webp", alt: "Carro Executivo" },
      ],
    },
    {
      id: "vans",
      label: "Vans",
      images: [
        
      ],
    },
    {
      id: "onibus",
      label: "Ônibus",
      images: [
        
      ],
    },
  ]

  return (
    <>
      <Tabs defaultValue="onibus" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
          {categories.map((category) => {
            const isDisabled = category.images.length === 0
          
            return (
              <TabsTrigger
                key={category.id}
                value={category.id}
                disabled={isDisabled}
                className={isDisabled ? "opacity-50 cursor-not-allowed" : ""}
              >
                {category.label}
              </TabsTrigger>
            )
          }        
          )}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {category.images.map((image, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <div className="relative h-64">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Modal de visualização de imagem */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Fechar"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative h-[70vh]">
              <Image src={selectedImage || "/placeholder.svg"} alt="Imagem ampliada" fill className="object-contain" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
