import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import WhatsAppButton from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Val Services | Fretamento Empresarial com qualidade e segurança",
  description:
    "Fretamento de passageiros para empresas com carros novos, motoristas treinados e foco em segurança e conforto. Atendemos Salvador e região metropolitana.",
  keywords: [
    "fretamento",
    "fretamento de passageiros",
    "fretamento corporativo",
    "transporte empresarial",
    "transporte com motoristas qualificados",
    "transporte corporativo",
    "ônibus empresarial",
    "transporte de funcionários",
    "fretamento executivo",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
