import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Val Service</h3>
            <p className="text-gray-400 mb-4">
              Soluções de fretamento corporativo com excelência, segurança e pontualidade.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#servicos" className="text-gray-400 hover:text-white transition-colors">
                  Fretamento Contínuo
                </Link>
              </li>
              <li>
                <Link href="/#servicos" className="text-gray-400 hover:text-white transition-colors">
                  Fretamento Eventual
                </Link>
              </li>
              <li>
                <Link href="/#servicos" className="text-gray-400 hover:text-white transition-colors">
                  Transporte Executivo
                </Link>
              </li>
              <li>
                <Link href="/#servicos" className="text-gray-400 hover:text-white transition-colors">
                  Shuttle Corporativo
                </Link>
              </li>
              <li>
                <Link href="/#servicos" className="text-gray-400 hover:text-white transition-colors">
                  Gestão de Rotas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/#sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/#clientes" className="text-gray-400 hover:text-white transition-colors">
                  Clientes
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-gray-400 hover:text-white transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="/#contato" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <address className="not-italic text-gray-400 space-y-2">
              
              <p>dermeval.almeida@hotmail.com</p>
              <p>(71) 98808-9662</p>
              <p>(71) 99309-4342</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Val Service. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
