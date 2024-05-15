import { useEffect, useRef, useState } from "react"
import { MenuItens } from "../../helper/menu"
import { FiMenu, FiX } from "react-icons/fi"
import { BtnHamburger, Container, ContainerNav } from "./styles"
import { MenuMobile } from "../MenuMobile"
import avatar from '../../assets/Logo.svg'

function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
      setIsOpen(!isOpen)
    }
  
    let useClickOutSide = (handler) => {
      let domNode = useRef()
  
    useEffect(() => {
      let maybeHandler = (event) => {
        if (domNode.current && !domNode.current.contains(event.target)) {
          handler()
        }
      }
  
      document.addEventListener('mousedown', maybeHandler)
  
      return() => {
        document.removeEventListener("mousedown", maybeHandler)
      }
    }, [handler])
  
      console.log(handler)
  
      return domNode
    }
  
    let domNode = useClickOutSide(() => {
      setIsOpen(false)
    })
  
    return (
      <Container ref={domNode}>
        <div className="img">
        <img src={avatar} alt="Logo" />
        </div>
        <ContainerNav >
          {MenuItens.map((item, i) => (
            <ol key={i}>
              <li>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            </ol>
          ))}
        </ContainerNav>
  
        <BtnHamburger onClick={toggleMenu}>
          {isOpen ? <FiX size={25} /> : <FiMenu size={25} />}
        </BtnHamburger>
  
        {isOpen && <MenuMobile />}
      </Container>
    )
}
export default NavBar;