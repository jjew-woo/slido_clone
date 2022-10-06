import styled from "styled-components"
import Card from "./card"

export default function Cards() {
    return (
        <Wrapper>
            <Card url="/icons/feature/ic_intuitive.svg" title="Intuitive and easy" content="The attendees can join without any logins or downloads, and the setup for hosts takes only minutes."/>
            <Card url="/icons/feature/ic_many_polls.svg" title="5+ polling options" content="With Slido’s 5 types of polls, Q&amp;A, quizzes and surveys, you can engage your participants in a variety of ways."/>
            <Card url="/icons/feature/ic_free.svg" title="Get started for free" content="Start with our forever-free Basic plan, or get more from Slido for only US$10 per month."/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1216px;
`