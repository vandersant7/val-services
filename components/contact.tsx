"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { sendEmail } from "@/app/actions"

export default function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)

    try {
      await sendEmail(formData)
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      })

      // Reset form
      const form = document.getElementById("contact-form") as HTMLFormElement
      form.reset()
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender sua empresa e desenvolver a melhor solução de fretamento para seus
            colaboradores.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold">Informações de Contato</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                <div>
                  <p className="font-medium">Telefone</p>
                  <p className="text-muted-foreground">(71) 98808-9662</p>
                  <p className="text-muted-foreground">(71) 99309-4342</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">contato@valservice.com.br</p>
                </div>
              </div>

              {/* <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                <div>
                  <p className="font-medium">Endereço</p>
                  <p className="text-muted-foreground">Av. Paulista, 1000 - Bela Vista</p>
                  <p className="text-muted-foreground">São Paulo - SP, 01310-100</p>
                </div>
              </div> */}
            </div>

            <div>
              <h4 className="text-xl font-medium mb-4">Horário de Atendimento</h4>
              <p className="text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
              <p className="text-muted-foreground">Sábado: 9h às 13h</p>
              <p className="text-muted-foreground">Plantão 24h para clientes</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form id="contact-form" action={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nome
                  </label>
                  <Input id="name" name="name" placeholder="Seu nome" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="seu@email.com" required />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Empresa
                </label>
                <Input id="company" name="company" placeholder="Nome da sua empresa" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Assunto
                </label>
                <Input id="subject" name="subject" placeholder="Assunto da mensagem" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensagem
                </label>
                <Textarea id="message" name="message" placeholder="Sua mensagem" rows={5} required />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" /> Enviar Mensagem
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
