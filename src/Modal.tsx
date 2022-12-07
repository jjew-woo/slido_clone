import styled from "styled-components"

export default function Modal() {
    return(
        <Wrapper>
            <VideoWrapper>
             <iframe 
                width="924" height="520" src="https://www.youtube.com/embed/TqZHb67kPTs?autoplay=1" frameBorder="0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </VideoWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`

const VideoWrapper = styled.div`

`