import styled from "styled-components"

interface MenuButtonProps {
    text: string;
}
export default function MenuButton( {text} : MenuButtonProps) {
    return (
        <Button>{text}</Button>
    )
    
}

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