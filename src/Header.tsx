import { useEffect, useState } from "react"
import styled from "styled-components"
import LinkedButton from "./LinkedButton"
import MenuButton from "./MenuButton"
import ColorButton from "./ColorButton"

export default function Header() {
    const [scrollY, setScrollY] = useState(false);

    const scrollEvent = () => {
        if(window.scrollY) {
            setScrollY(true)
        }
        else {
            setScrollY(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollEvent)
        return () => {
            window.removeEventListener('scroll', scrollEvent)
        }
    })

    return (
        <Wrapper>
            <Nav underline={scrollY}>
                <NavWrapper>
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
                </NavWrapper>
            </Nav>
        </Wrapper>
    )
}

const Nav = styled.nav`
    top:0;
    width: 100vw;
    height: 48px;
    position: fixed;
    display: flex;
    justify-content: center;
    padding: 16px 0;
    z-index: 93;
    background-color: white;
    box-shadow:${props=>(props.underline ? '0 0.125rem 0.125rem rgb(0 0 0 / 10%)' : 'none')};
`

const NavWrapper = styled.div`
    display: flex;
    width: 1280px;
    align-items: center;
    justify-content: center;
    padding: 0 32px;
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
    margin-right: 170px;
`

const MenuWrapper = styled.div`
    /* flex-direction: row; */
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 130px;
`