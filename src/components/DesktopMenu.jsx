import styled from "styled-components";

export const DesktopMenu = () => {

    const MenuList = [
        { label: 'Home', id: 'home'},
        { label: 'Serviços', id: 'services'},
        { label: 'Sobre', id: 'about'},
        { label: 'Contato', id: 'contact'},
    ]

    const StyledMenu = styled.div`
        display: none;
        @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: right;
            font-size: 1.5rem;
        }
    `
    const StyledUl = styled.ul`
        justify-content: right;
        padding: 1rem;
    `

    return ( 
        <StyledMenu>
            { MenuList.map((list, i) => (
                <StyledUl key={i}>
                    <li><a href={`#${list.id}`}>{list.label}</a></li>
                </StyledUl>
            ))}
        </StyledMenu>
     );
}