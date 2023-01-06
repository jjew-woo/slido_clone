import { useState } from "react"
import styled from "styled-components"

interface EventInputBoxProps {
    isOpacity: number;
}

export default function EventInputBox() {
    const [isInputText, setIsInputText] = useState<boolean>(false)
    const checkInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        setIsInputText(e.target.value ? true : false);
    }
    
    return (
        <Wrapper>
            <EventBox>
                <EventLabel>Joining as a participant?</EventLabel>
                <EventWrapper>
                    <Hash>#</Hash>
                    <EventInput type="text" placeholder="Enter code here" onChange={checkInput}></EventInput>
                    <Circle>
                        <svg width="30" height="30" viewBox="0 0 30 30" role="img">
                            <circle cx="15" cy="15" r="15" fill="#1A73E8"/>
                            <path d="M14.0967 21.6001L20.0967 15.0001L14.0967 8.4001" stroke="white" strokeWidth="1.54286" fill="none"/>
                            <path d="M19.1973 14.9998L7.19727 14.9998" stroke="white" strokeWidth="1.54286"/>
                        </svg>
                    </Circle>
                </EventWrapper>
                <EventLegal isOpacity={isInputText ? 1 : 0}>By using Slido you accept our <ColorText>Policy</ColorText></EventLegal>
            </EventBox>
            
        </Wrapper>
    )
}

const Wrapper = styled.form`
`

const EventBox = styled.div`
    position: relative;
    display: flex;
    height: 58px;
    width: 580px;
    background-color: #1A73E8;
    border-radius: 32px;
    padding: 0 8px 0 24px;
    //text-align: center;
    justify-content: space-between;
    align-items: center;
`

const EventWrapper = styled.div`
    position: relative;
    display: flex;
    height: 42px;
    box-sizing: border-box;
    align-items: center;
`

const EventInput = styled.input`
    display: block;
    height: 26px;
    width: 185px;
    font-size: 18px;
    background-color: white;
    border-radius: 24px;
    border: 1px solid #999999;
    text-overflow: ellipsis;
    padding: 8px 40px;
    cursor: text;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: black;
    }
    :-ms-input-placeholder {
        color: black;
    }
`

const EventLabel = styled.span`
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    color: white;
    display: block;
`

const Hash = styled.span`
    position: absolute;
    color: #1A73E8;
    font-weight: 800;
    font-size: 25px;
    padding-left: 15px;
`

const Circle = styled.span`
    position: absolute;
    margin-left: 230px;
    cursor: pointer;
`

const EventLegal = styled.p<EventInputBoxProps>`
    position: absolute;
    width: 192px;
    font-size: 14px;
    text-align: left;
    left: calc(100% + 1rem);
    opacity: ${(props) => props.isOpacity};
`

const ColorText = styled.span`
    color: #39ac37;
    text-decoration: underline;
    cursor: pointer;
`