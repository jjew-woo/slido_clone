import styled from "styled-components"

export default function Header() {
    return (
        <Wrapper>
            <Nav>
                <LogoWrapper><Logo src="/icons/ic_logo.svg" alt="logo"/></LogoWrapper>
                <MenuWrapper>
                    <Btn>Product</Btn>
                    <Btn>Solution</Btn>
                    <Linkedbtn>Pricing</Linkedbtn>
                    <Btn>Resources</Btn>
                    <Linkedbtn>Enterprise</Linkedbtn>
                </MenuWrapper>
                <MenuWrapper>
                <Linkedbtn>Log In</Linkedbtn>
                    <Btn className="colorBtn">sign Up</Btn>
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
`

const Btn = styled.button`
    height: 24px;
    font-size: 16px;
	display: inline-block;
    position: relative;
    border:none;
	border-radius: 4px;
    box-shadow: none;
    background-color: white;
    margin-left: 32px;
    &.colorBtn {
        font-weight: 700;
        //width: 126px;
        height: 48px;
        padding: 11px 32px;
        color: white;
        background-color: #39AC37;
        &:hover {
            cursor: pointer;
            background-color: black;
        }
    }
`

const Linkedbtn = styled.a`
    font-size: 16px;
	display: inline-block;
    margin-left: 32px;
    height: 24px;
    :hover{
        cursor: pointer;
        color: rgb(57, 172, 55);
        text-decoration: underline solid rgb(57, 172, 55);
    }
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