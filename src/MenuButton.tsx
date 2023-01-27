import { useState } from "react";
import styled from "styled-components"

interface MenuButtonProps {
    text: string;
    children: JSX.Element;
}

export default function MenuButton( {text, children} : MenuButtonProps) {
    const [showSubmenu, setShowSubmenu] = useState<boolean>(false);

    return (
        <Wrapper onMouseOver={() => {setShowSubmenu(true)}} onMouseLeave={() => {setShowSubmenu(false)}}>
            <Button>{text}</Button>
            {showSubmenu && children}
        </Wrapper>
    )
    
}
const Wrapper = styled.div`
    z-index: 5;
`

const Button = styled.button`
    height: 24px;
    font-size: 16px;
	display: inline-block;
    position: relative;
    border:none;
	border-radius: 4px;
    box-shadow: none;
    background-color: white;
    margin-right: 32px;
`