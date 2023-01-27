import { useState } from "react";
import styled from "styled-components"

interface SubmenuProps {
    subCategories: Array<any>;
}

export default function Submenu({subCategories} : SubmenuProps) {
    const [hoverMenu, setHoverMenu] = useState<number>(0);

    return (
        <Background>
            {subCategories.map((category, idx) => (
                <Menu onMouseEnter={() => {setHoverMenu(idx)}} isSelect={idx === hoverMenu}>{category.name}</Menu>
            ))}
        </Background>
    )
}

const Background = styled.ul`
    /* height: 432px;
    width: 490px; */
    position: absolute;
    background-color: #FFFFFF;
    border-radius: 4px;
    top: 40px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px 0px;
    list-style:none;
    padding: 24px 0 24px 0;
    text-align: left;
`

const Menu = styled.li`
    padding: 12px 32px;
    cursor: pointer;
    background-color: ${(props) => props.isSelect ? `#F5F5F5` : `#FFFFFF`};
    font-size: 16px;
`