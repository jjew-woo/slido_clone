import styled from "styled-components"
import LinkedButton from "./LinkedButton"
import MenuButton from "./MenuButton"
import ColorButton from "./ColorButton"

export default function Header() {
    return (
        <Wrapper>
            <Nav>
                <LogoWrapper><Logo src="/icons/ic_logo.svg" alt="logo"/></LogoWrapper>
                <MenuWrapper>
                    <MenuButton text="Product"/>
                    <MenuButton text="Solution"/>
                    <LinkedButton text="Pricing"/>
                    <MenuButton text="Resources"/>
                    <LinkedButton text="Enterprise"/>
                </MenuWrapper>
                <MenuWrapper>
                    <LinkedButton text="Log In"/>
                    <ColorButton height="48px" text="sign Up" />
                </MenuWrapper>
            </Nav>
            <EventBox>
                <EventLabel>Joining as a participant?</EventLabel>
                <EventWrapper><EventInput type="text" value="Enter code here"></EventInput></EventWrapper>
            </EventBox>
        </Wrapper>
    )
}


const Nav = styled.nav`
    top:0;
    height: 48px;
    position: relative;
    display: flex;
    padding: 0 32px;
    margin: 0 109px;
    z-index: 93;
    align-items: center;
    justify-content: space-between;
`

const Wrapper = styled.div`
    /* display: block; */
    width: 100vw;
    height: 80px;
    /* position: relative; */
    padding: 16px 0;
    align-items: center;
    /* flex-direction: row; */
    
`
const Logo = styled.img`
    height: 24px;
`

const LogoWrapper = styled.div`
    height: 24px;
    display: flex;
`

const MenuWrapper = styled.div`
    /* flex-direction: row; */
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const EventBox = styled.div`
    //position: relative;
    display: flex;
    height: 58px;
    width: 580px;
    background-color: #1A73E8;
    border-radius: 32px;
    margin: 24px auto;
    //text-align: center;
    justify-content: center;
    align-items: center;
`
const EventWrapper = styled.div`
    position: relative;
    display: flex;
    height: 42px;
    box-sizing: border-box;
    
`

const EventInput = styled.input`
    display: block;
    font-size: 18px;
    background-color: white;
    border-radius: 24px;
    border: 1px solid #999999;
    text-overflow: ellipsis;
    cursor: text;
`

const EventLabel = styled.span`
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    color: white;
    display: block;
    padding-right: 32px;
`