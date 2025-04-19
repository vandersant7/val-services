"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function Clients() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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

  // Simulação de logos de clientes
  const clients = [
    { name: "Empresa A", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Empresa B", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Empresa C", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Empresa D", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Empresa E", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Empresa F", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Empresa G", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Empresa H", logo: "/placeholder.svg?height=100&width=200" },
  ]

  return (
    <section id="clientes" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Clientes</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Empresas que confiam em nossos serviços de fretamento para o transporte seguro e confortável de seus
            colaboradores.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center justify-center p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={`Logo ${client.name}`}
                width={200}
                height={100}
                className="max-w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
