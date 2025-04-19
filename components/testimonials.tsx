"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export default function Testimonials() {
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

  const testimonials = [
    {
      name: "Ana Silva",
      role: "Gerente de RH",
      company: "Empresa ABC",
      avatar: "/placeholder.svg?height=100&width=100",
      content:
        "A Val Service transformou o deslocamento dos nossos colaboradores. Pontualidade impecável e motoristas extremamente profissionais. Recomendo sem hesitar!",
      rating: 5,
    },
    {
      name: "Carlos Mendes",
      role: "Diretor Operacional",
      company: "Indústria XYZ",
      avatar: "/placeholder.svg?height=100&width=100",
      content:
        "Desde que contratamos a Val Service, o absenteísmo diminuiu significativamente. Nossos funcionários chegam mais descansados e produtivos. Serviço excepcional!",
      rating: 5,
    },
    {
      name: "Mariana Costa",
      role: "Coordenadora Administrativa",
      company: "Grupo 123",
      avatar: "/placeholder.svg?height=100&width=100",
      content:
        "A flexibilidade da Val Service em adaptar rotas conforme nossas necessidades foi fundamental para o sucesso da parceria. Atendimento personalizado e de alta qualidade.",
      rating: 4,
    },
  ]

  return (
    <section id="depoimentos" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Depoimentos</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Veja o que nossos clientes dizem sobre nossos serviços de fretamento e transporte corporativo.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                        />
                      ))}
                  </div>
                  <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
