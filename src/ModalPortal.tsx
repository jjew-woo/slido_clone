import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

interface ModalPortalProps {
    children: JSX.Element;
    closePortal: () => void;
}

export default function ModalPortal({children, closePortal} : ModalPortalProps) {
    const ref = useRef<Element | null>();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if(document) {
            const dom = document.getElementById("root-modal");
            ref.current = dom;
        }
    }, [])

    if (ref.current && mounted) {
        return createPortal(
            <Wrapper>
                <Background
                role="presentation"
                onClick={closePortal}
                />
                <Content>
                    <MainContent>{children}</MainContent>
                    <CloseWrapper>
                        <CloseButton onClick={closePortal}>X</CloseButton>
                    </CloseWrapper>
                </Content>
                
            </Wrapper>,
            ref.current
        );
    }
    return null;
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 11;
    width: 100%;
    height: 100%;
    
`

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.5;
    
`

const Content = styled.div`
    display: flex;
    z-index: 10;
    width: 990px;
    height: 515px;
`

const CloseWrapper = styled.div`
    display: inline-flex;
    justify-content: flex-end;
    width: 100%;
    
`

const MainContent = styled.div`
    display: flex;
    background-color: black;
`

const CloseButton = styled.button`
    background-color: transparent;
    color: white;
    border: none;
    height: 20px;
    font-size: 20px;
    padding: 0;
    cursor: pointer;
`