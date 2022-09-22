import styled from "styled-components"

interface ColorButtonProps {
    height: string;
    text: string;
}
export default function ColorButton( {text, height} : ColorButtonProps) {
    return (
        <Button height={height}>{text}</Button>
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
    color: white;
    font-weight: 700;
    background-color: #39AC37;
    &:hover {
        cursor: pointer;
        background-color: black;
    }
`