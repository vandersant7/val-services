"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const pathname = usePathname()
  const { theme } = useTheme()

  useEffect(() => {
    setIsMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/#sobre", label: "Sobre" },
    { href: "/#servicos", label: "Serviços" },
    { href: "/#clientes", label: "Clientes" },
    { href: "/#depoimentos", label: "Depoimentos" },
    { href: "/#contato", label: "Contato" },
    { href: "/galeria", label: "Galeria" },
  ]

  const getLinkStyle = (link: { href: string }) => {
    if (!isMounted) return "text-sm font-bold transition-colors"

    if (link.href === "/galeria") {
      return "bg-gradient-to-r from-blue-600 to-red-600 text-white px-4 py-2 rounded-md hover:from-blue-700 hover:to-red-700"
    }

    const isActive = pathname === link.href || (pathname === "/" && link.href.startsWith("/#"))

    if (theme === "light") {
      if (isActive) {
        return isScrolled 
          ? "text-black drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]"
          : "text-blue-500 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]"
      }
      return isScrolled
        ? "text-black/90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]"
        : "text-blue-500/90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]"
    } else {
      if (isActive) return "text-white"
      return isScrolled ? "text-muted-foreground" : "text-white/90"
    }
  }

  const getMobileLinkStyle = (link: { href: string }) => {
    if (!isMounted) return "text-sm font-medium py-2 transition-colors"

    if (link.href === "/galeria") {
      return "bg-gradient-to-r from-blue-600 to-red-600 text-white px-4 py-2 rounded-md hover:from-blue-700 hover:to-red-700"
    }

    const isActive = pathname === link.href || (pathname === "/" && link.href.startsWith("/#"))

    if (theme === "light") {
      return isActive 
        ? "text-black drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]" 
        : "text-muted-foreground"
    } else {
      return isActive 
        ? "text-primary" 
        : "text-muted-foreground"
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <span className={cn(
              "text-2xl font-bold bg-gradient-to-r from-blue-600 to-red-600 text-transparent bg-clip-text"
            )}>
              Val Service
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {isMounted &&
              navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn("text-sm font-bold transition-colors", getLinkStyle(link))}
                >
                  {link.label}
                </Link>
              ))}
            <ModeToggle />
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center md:hidden">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="ml-2">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {isMounted &&
                navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn("text-sm font-medium transition-colors py-2", getMobileLinkStyle(link))}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              <Button className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 w-full">
                <Link href="/#contato" onClick={() => setIsMenuOpen(false)}>
                  Solicitar Orçamento
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
