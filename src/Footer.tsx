import styled from "styled-components"
import ExternalLinks from "./ExternalLinks"
import FooterCopyright from "./FooterCopyright"
import Utils from "./Utils"

function Footer() {
    return (
        <Wrapper>
            <Utils />
            <ExternalLinks />
            <FooterCopyright />
        </Wrapper>
        
    )

}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 80px;
`

export default Footer