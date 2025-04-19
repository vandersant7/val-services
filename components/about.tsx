"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-tl-2xl z-0" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-600 rounded-br-2xl z-0" />
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/img1.webp"
                alt="Frota de carros executivos da Val Service"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                loading="lazy"
                unoptimized
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Sobre a Val Service</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600" />
            </div>

            <p className="text-lg text-muted-foreground">
              Há mais de 15 anos no mercado, a Val Service é especializada em soluções de fretamento para empresas que
              valorizam o bem-estar e a segurança de seus colaboradores.
            </p>

            <p className="text-lg text-muted-foreground">
              Nossa missão é proporcionar uma experiência de transporte que combine conforto, pontualidade e segurança,
              contribuindo para a qualidade de vida dos passageiros e para a eficiência operacional das empresas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "Frota moderna e rastreada",
                "Motoristas treinados",
                "Pontualidade garantida",
                "Atendimento 24h",
                "Manutenção preventiva",
                "Soluções personalizadas",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
