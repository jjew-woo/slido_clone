import styled from "styled-components"
import ExternalLinks from "./ExternalLinks"
import Utils from "./Utils"

function Footer() {
    return (
        <Wrapper>
            <Utils />
            <ExternalLinks />
        </Wrapper>
        
    )

}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 0 24px 0;
`

export default Footer