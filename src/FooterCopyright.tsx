import styled from "styled-components"

export default function FooterCopyright() {
    return(
        <Wrapper>
            <Copyright>© 2023 Cisco Systems, Inc. All rights reserved.</Copyright>
            <Wrapper>
                <Logo src="/icons/ic_webex.svg" alt="" />
                <Copyright>Slido is now part of Webex.</Copyright>
            </Wrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
`

const Copyright = styled.span`
    display: block;
    color: #999999;
`

const Logo = styled.img`
    height: 32px;
    margin: 0 20px 0 40px;
`