"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bus, Users, Clock, Calendar, Route, Shield } from "lucide-react"

export default function Services() {
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

  const services = [
    {
      icon: <Bus className="h-10 w-10 text-blue-600" />,
      title: "Fretamento Contínuo",
      description:
        "Transporte diário de colaboradores com rotas e horários fixos, otimizando o deslocamento casa-trabalho.",
    },
    {
      icon: <Users className="h-10 w-10 text-red-600" />,
      title: "Fretamento Eventual",
      description:
        "Soluções para eventos corporativos, treinamentos e ocasiões especiais com atendimento personalizado.",
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-600" />,
      title: "Transporte Executivo",
      description:
        "Serviço premium com veículos de luxo para diretores e executivos, garantindo conforto e privacidade.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-red-600" />,
      title: "Shuttle Corporativo",
      description:
        "Conexão entre unidades da empresa ou com estações de transporte público, facilitando a mobilidade interna.",
    },
    {
      icon: <Route className="h-10 w-10 text-blue-600" />,
      title: "Gestão de Rotas",
      description: "Planejamento e otimização de rotas para reduzir tempo de deslocamento e custos operacionais.",
    },
    {
      icon: <Shield className="h-10 w-10 text-red-600" />,
      title: "Transporte Seguro",
      description: "Protocolos rigorosos de segurança e higiene, com monitoramento em tempo real de toda a frota.",
    },
  ]

  return (
    <section id="servicos" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas de fretamento, adaptadas às necessidades específicas da sua empresa e seus
            colaboradores.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
