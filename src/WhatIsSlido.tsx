import { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal"
import ModalPortal from "./ModalPortal";

interface WhatIsSlidoProps {
    transform: string;
    cursor: string;
}

export default function WhatIsSlido() {
    const [mouseEnter, setMouseEnter] = useState(false);
    const [modalOpened, setModalOpened] = useState(false);

    const handleOpen = () : void => {
        setModalOpened(true);
    }

    const handleClose = () : void => {
        setModalOpened(false);
    }

    return (
        <Wrapper>
            {modalOpened && (
                <ModalPortal closePortal={handleClose}>
                    <Modal />
                </ModalPortal>
            )}
            <RootModal id="root-modal"></RootModal>
            <ThumbWrapper onClick={handleOpen} onMouseEnter={() => {setMouseEnter(true)}} onMouseLeave={() => {setMouseEnter(false)}}>
                <Thumb src="/icons/what-is-slido.png" alt="" />
                <PlayBtn src="/icons/playButton.svg" alt="" transform={mouseEnter ? "translate(-50%,-50%) scale(1.15)" : "translate(-50%,-50%)"} cursor={mouseEnter ? "pointer" : "default"}/>
            </ThumbWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    
`

const ThumbWrapper = styled.div`
    position: relative;
    cursor: pointer;
`

const RootModal = styled.div`
    
`

const Thumb = styled.img`
    
    width: 1216px;
`

const PlayBtn = styled.img<WhatIsSlidoProps>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: ${(props) => props.transform};
    transition-duration: 500ms;
`
