import styled from "styled-components"
import Cards from "./Cards"
import ColorButton from "./ColorButton"
import Recognitions from "./Recognitions"
import EventInputBox from "./EventInputBox"

export default function Body() {
    return (
        <Wrapper>
            <EventInputBox />
            <TitleWrapper>
                <Title>Your go-to interaction app for hybrid meetings</Title>
                <Content>Engage your participants with live polls, Q&amp;A, quizzes and word clouds — whether you meet in the office, online or in-between.</Content>
                <ButtonWrapper>
                    <ColorButton height="56px" text="Get start for free"/>
                    <Button>Schedule a demo</Button>
                </ButtonWrapper>
                <Video autoPlay muted loop>
                    <source src="/videos/videos_welcome.mp4" type="video/mp4" />
                </Video>
            </TitleWrapper>
            <ListWrapper>
                <h2>You can use Slido with</h2>
                <ItemList>
                    <Item>
                        <img src="/icons/integration/ic_webex.svg" alt=""></img>
                        <div>webex</div>
                    </Item>
                    <Item>
                        <img src="/icons/integration/ic_powerpoint.svg" alt=""></img>
                        <div>powerpoint</div>
                    </Item>
                    <Item>
                        <img src="/icons/integration/ic_microsoft_teams.svg" alt=""></img>
                        <div>teams</div>
                    </Item>
                    <Item>
                        <img src="/icons/integration/ic_google_slides.svg" alt=""></img>
                        <div>Google Slides</div>
                    </Item>
                    <Item>
                        <img src="/icons/integration/ic_youtube.svg" alt=""></img>
                        <div>Live videos</div>
                    </Item>
                </ItemList>
            </ListWrapper>
            <Thumb src="/icons/what-is-slido.png" alt="" />
            <MiddleBox>
                <MiddleTitle>It’s how you <ColorText>include everyone</ColorText> in your meetings</MiddleTitle>
                <Content>Slido gives you everything you need to engage your participants, capture their views and make everyone feel connected – whether you’re running a team call, training or an all-company meeting.</Content>
            </MiddleBox>
            <Cards />
            <Recognitions />
            <MiddleTitle>Trusted by 860K customers worldwide</MiddleTitle>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction : column;
`

const TitleWrapper = styled.div`
    padding: 0px 32px;
`

const ListWrapper = styled.div`
    width: 1280px;
    padding: 56px 32px;
    margin: 0 auto;
`

const ItemList = styled.ul`
    width: 1184px;
    list-style-type: none;
    justify-content: space-between;
    display: flex;
    padding: 0px 16px;
`

const Item = styled.li`
    float: left;
    display: blocks;
`

const Title = styled.h1`
    font-size: 50px;
    font-weight: 700;
`

const Content = styled.p`
    font-size: 20px;
    margin: 20px 0;
`

const ButtonWrapper = styled.div`
    display: flex;
    height: 80px;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
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
`

const Video = styled.video`
    width: 800px;
    height: 450px;
`

const Thumb = styled.img`
    width: 1216px;
`

const MiddleBox = styled.article`
    display: block;
    padding: 80px 16px;
    margin: 0 270px;
`

const MiddleTitle = styled.h2`
    display: block;
    font-size: 48px;
`

const ColorText = styled.span`
    color: #39AC37;
`