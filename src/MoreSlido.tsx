import styled from "styled-components"
import ColorButton from "./ColorButton"

export default function MoreSlido() {
    return (
        <Background>
            <Wrapper>
                <Title>Make your meetings more interactive with Slido.</Title>
                <ColorButton height="56px" text="Try it free" color="black" background="#fff"/>
            </Wrapper>
        </Background>
        
    )
}

const Background = styled.div`
    display: flex;
    width: 100%;
    height: 400px;
    background-color: #39AC37;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    width: 800px;
    text-align: center;
    padding: 0 32px;
`

const Title = styled.h2`
    color: #fff;
    /* width: 800px; */
    font-size: 48px;
`