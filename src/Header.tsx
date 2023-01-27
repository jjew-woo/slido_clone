import { useEffect, useState } from "react"
import styled from "styled-components"
import LinkedButton from "./LinkedButton"
import MenuButton from "./MenuButton"
import ColorButton from "./ColorButton"
import Submenu from "./Submenu"

interface MenuProps {
    categories: Array<[]>;
}

export default function Header({categories} : MenuProps) {
    const [scrollY, setScrollY] = useState(false);
    const [showSubmenu, setShowSubmenu] = useState(false);

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
                        {categories.map((category : any) => (
                            category.subCategories.length ? 
                            <MenuButton text={category.name}><Submenu subCategories={category.subCategories}/></MenuButton> 
                            : <LinkedButton text={category.name}/>
                        ))}
                    </MenuWrapper>
                    <MenuWrapper>
                        <LinkedButton text="Log In"/>
                        <ColorButton height="48px" text="sign Up" color="white" background="#39AC37"/>
                    </MenuWrapper>
                </NavWrapper>
            </Nav>
        </Wrapper>
    )
}

const Nav = styled.nav`
    top:0;
    width: 100%;
    height: 48px;
    position: fixed;
    display: flex;
    justify-content: center;
    padding: 16px 0;
    z-index: 8;
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
    width: 100%;
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