import styled from "styled-components"

export default function Header() {
    return (
        <Wrapper>
            <Title>The largest, most successful companies boost audience participation with Slido</Title>
            <Content>71% of the Fortune 500 and thousands of smaller companies have transformed their meetings with Slido’s polls, Q&amp;A, quizzes and word clouds.</Content>
            <ButtonWrapper>
                <Button className="colorBtn">Get start for free</Button>
                <Button>Schedule a demo</Button>
            </ButtonWrapper>
            <video loop muted src="https://www.slido.com/_next/static/media/651ee4a2e705f5ae.mp4">
            </video>
        </Wrapper>
        
    )
}

const Wrapper = styled.div`
    
`

const Title = styled.h1`
    font-size: 50px;
    font-weight: 700;
`

const Content = styled.p`
    font-size: 20px;
`

const ButtonWrapper = styled.div`
    height: 80px;
    
`

const Button = styled.button`
    height: 24px;
    font-size: 16px;
    font-weight: 700;
    color: rgb(57, 172, 55);
    text-decoration: underline solid rgb(57, 172, 55);
	display: inline-block;
    position: relative;
    border:none;
	border-radius: 4px;
    box-shadow: none;
    background-color: white;
    margin: 12px 16px;
    &:hover {
        cursor: pointer;
        text-decoration: none solid rgb(57, 172, 55);
    }
    &.colorBtn {
        font-weight: 700;
        height: 56px;
        padding: 15px 32px;
        color: white;
        background-color: #39AC37;
        &:hover {
            background-color: black;
        }
    }
`