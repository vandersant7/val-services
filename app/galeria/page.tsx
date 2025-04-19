import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import Gallery from "@/components/gallery"

export const metadata: Metadata = {
  title: "Galeria de Fotos | TransFrete",
  description: "Conheça nossa frota de ônibus e vans para fretamento corporativo através de nossa galeria de fotos.",
  keywords: ["galeria", "fotos fretamento", "frota de ônibus", "vans executivas", "transporte corporativo"],
}

export default function GaleriaPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Galeria de Fotos</h1>
        <Gallery />
      </div>
      <Footer />
    </main>
  )
}
