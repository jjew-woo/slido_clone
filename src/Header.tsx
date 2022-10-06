import styled from "styled-components"
import LinkedButton from "./LinkedButton"
import MenuButton from "./MenuButton"
import ColorButton from "./ColorButton"
import EventInputBox from "./EventInputBox"

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
            <EventInputBox />
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