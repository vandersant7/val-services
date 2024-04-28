import { Squash as Hamburger } from 'hamburger-react'
import { useRef, useState } from 'react'
import styled from 'styled-components'
import { useClickAway } from 'react-use'

export const MobileMenu = () => {
  const MenuList = [
    { label: 'Home', id: 'home' },
    { label: 'Serviços', id: 'services' },
    { label: 'Sobre', id: 'about' },
    { label: 'Contato', id: 'contact' },
  ]

  const StyledMenu = styled.div`
    position: fixed;
    top: 1.5rem;
    right: 0;
    padding: 1.25rem 1.25rem 0;

    @media (min-width: 768px) {
      display: none;
    }
  `

  const StyledHamburger = styled(Hamburger)`
    position: absolute;
    top: 1rem;
    right: 1rem;
  `

  const StyledUl = styled.ul`
    background-color: #eee;
    width: 200px;
  `

  const MobileItem = styled.li`
    width: 100%;
    padding: 0.02rem;
    border-radius: 0.75rem;
  `

  const MobileMenuLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1.25rem;
    border-radius: 0.75rem;
    color: #222;
  `

  const MobileMenuLinkText = styled.span`
    display: flex;
    gap: 0.25rem;
    font-size: 1.125rem;
  `

  const [isOpen, setOpen] = useState(false)
  const ref = useRef(null)
  useClickAway(ref, () => setOpen(false))

  return (
    <StyledMenu ref={ref}>
      <StyledHamburger toggled={isOpen} toggle={setOpen} size={25} />

      {isOpen && (
        <div>
          {MenuList.map((list, i) => (
            <StyledUl key={i}>
              <MobileItem>
                <MobileMenuLink
                  onClick={() => setOpen((prev) => !prev)}
                  href={`#${list.id}`}>
                  <MobileMenuLinkText>{list.label}</MobileMenuLinkText>
                </MobileMenuLink>
              </MobileItem>
            </StyledUl>
          ))}
        </div>
      )}
    </StyledMenu>
  )
}
