import styled from "styled-components"
import Recognition from "./Recognition"

export default function Recognitions() {
    return (
        <Wrapper>
            <Recognition url="/icons/badge/ic_badge1.svg" />
            <Recognition url="/icons/badge/ic_badge2.svg" />
            <Recognition url="/icons/badge/ic_badge3.svg" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1216px;
    padding: 56px 0;
`