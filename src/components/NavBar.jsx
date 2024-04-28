import styled from 'styled-components'
import { DesktopMenu } from './DesktopMenu'
import { MobileMenu } from './MobileMenu'

export const NavBar = () => {
  const StyledNavBar = styled.div`
    padding: 0 1rem;
    min-height: 10vh;
    display: grid;
    grid-template-columns: 1fr 3fr;
    background-color: #13293d;
    color: #eee;

    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `

  const StyledLogo = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      justify-content: center;
    }
  `
  return (
    <StyledNavBar>
      <StyledLogo>
        <h2>LOGO</h2>
      </StyledLogo>
      <DesktopMenu />
      <MobileMenu />
    </StyledNavBar>
  )
}
