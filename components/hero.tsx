"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Abordagem 1: Usando div com background-image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${process.env.NODE_ENV === 'development' ? '' : ''}/images/hero.webp)`,
          filter: "brightness(0.4)",
        }}
      />

      {/* Abordagem 2: Usando Image do Next.js como fallback */}
      <div className="absolute inset-0 z-0 opacity-0">
        <Image 
          src="/images/hero.webp" 
          alt="Background hero" 
          fill 
          priority 
          className="object-cover brightness-[0.4]"
        />
      </div>

      <div className="container mx-auto px-4 z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transporte corporativo com excelência e segurança
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Soluções de fretamento personalizadas para o transporte de colaboradores da sua empresa, com conforto,
            pontualidade e segurança.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white"
            >
              <Link href="/#contato">Solicitar Orçamento</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-muted-foreground hover:bg-white/10">
              <Link href="/#servicos">Conheça Nossos Serviços</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
