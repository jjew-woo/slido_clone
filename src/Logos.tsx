import styled from "styled-components"
import Logo from "./Image"

export default function Logos() {
    return (
        <Background>
            <Wrapper>
                <Logo url="/icons/company/ic_suntory_black.svg" />
                <Logo url="/icons/company/ic_booking_black.svg" />
                <Logo url="/icons/company/ic_web_summit_black.svg" />
                <Logo url="/icons/company/ic_swiss_black.svg" />
                <Logo url="/icons/company/ic_oracle_black.svg" />
            </Wrapper>
        </Background>
    )
}

const Background = styled.div`
    width: 100vw;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1216px;
    padding: 56px 32px;
`