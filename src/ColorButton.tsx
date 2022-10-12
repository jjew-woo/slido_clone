import styled from "styled-components"

interface ColorButtonProps {
    height: string;
    text: string;
    color: string;
    background: string
}
export default function ColorButton( {text, height, color, background} : ColorButtonProps) {
    return (
        <Button height={height} color={color} background={background}>{text}</Button>
    )
    
}

const Button = styled.button<ColorButtonProps>`
    height: ${(props) => props.height};
    padding: 11px 32px;
    font-size: 16px;
	display: inline-block;
    position: relative;
    border:none;
	border-radius: 4px;
    box-shadow: none;
    color: ${(props) => props.color};
    font-weight: 700;
    background-color: ${(props) => props.background};
    &:hover {
        cursor: pointer;
        background-color: black;
        color: white;
    }
`