import styled from "styled-components"

interface PostProps {
    thumb: string;
    text: string;
}

export default function Post({thumb, text} : PostProps) {
    return (
        <Wrapper>
            <Image src={thumb}/>
            <Text>{text}</Text>
            <MoreBtn>Learn more</MoreBtn>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 384px;
    padding-top: 16px;
`

const Image = styled.img`
    width: 384px;
`

const Text = styled.h3`
    display: block;
    text-align: left;
    font-size: 24px;
    margin: 10px 0;
    &:hover {
        cursor: pointer;
        text-decoration: underline solid black;
    }
`

const MoreBtn = styled.a`
    display: block;
    text-align: left;
    font-size: 16px;
    font-weight: 700;
    color: rgb(57, 172, 55);
    text-decoration: underline solid rgb(57, 172, 55);
    &:hover {
        cursor: pointer;
        text-decoration: none solid rgb(57, 172, 55);
    }
`