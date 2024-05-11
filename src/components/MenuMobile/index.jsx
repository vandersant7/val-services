import { MenuContainer } from "./styles";
import { MenuItens } from "../../helper/MenuItens";

export const MenuMobile = () => {

    

    return ( 
        <MenuContainer >
            { MenuItens.map((item, i) => (
                <ul key={i}>
                    <li><a href={`#${item.id}`}>{item.label}</a></li>
                </ul>
            ))}
        </MenuContainer>
     );
}

