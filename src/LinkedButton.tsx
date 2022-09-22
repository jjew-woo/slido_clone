import styled from "styled-components"

interface LinkedButtonProps {
    text: string;
}
export default function LinkedButton( {text} : LinkedButtonProps) {
    return (
        <Button>{text}</Button>
    )
    
}

const Button = styled.a`
    font-size: 16px;
	display: inline-block;
    margin-right: 32px;
    height: 24px;
    :hover{
        cursor: pointer;
        color: rgb(57, 172, 55);
        text-decoration: underline solid rgb(57, 172, 55);
    }
`