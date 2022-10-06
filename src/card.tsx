import styled from "styled-components"

interface CardProps {
    url: string;
    title: string;
    content: string;
}

export default function Card({url, title, content}: CardProps) {
    return (
        <Box>
            <Icon src={url}></Icon>
            <Title>{title}</Title>
            <Text>{content}</Text>
        </Box>
    )
}

const Box = styled.div`
    display: flex;
    align-items : flex-start;
    flex-direction : column;
    justify-content: center;
    width: 300px;
    height: 200px;
    background-color: #f5f5f5;
    padding: 40px;
`
const Icon = styled.img`
`

const Title = styled.h3`
    display: block;
    text-align: left;
    font-size: 24px;
    margin: 16px 0 0 0;
`

const Text = styled.p`
    display: block;
    text-align: left;
    font-size: 18px;
    margin: 16px 0 0 0;
`