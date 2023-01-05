import styled from "styled-components";

interface SwiperSlideProps {
    // children: JSX.Element;
    comment: string;
    staff: string;
    companyLogo: string;
    photoUrl: string;
    index: number;
}

export default function SwiperSlide({index, comment, staff, companyLogo, photoUrl} : SwiperSlideProps) {
    return (
        <Wrapper index={index}>
            <CommentWrapper>
                <LogoImage src={companyLogo}></LogoImage>
                <Comment>{comment}</Comment>
                <Staff>{staff}</Staff>
            </CommentWrapper>
            <PhotoWrapper>
                <Photo src={photoUrl}></Photo>
            </PhotoWrapper>
            
        </Wrapper>
    )
}

const Wrapper = styled.div<SwiperSlideProps>`
    display: flex;
    width: 1072px;
    height: 528px;
    padding: 0 30px;
    padding-top: 48px;
    justify-content: space-between;
    align-items: center;
`

const CommentWrapper = styled.div`
    float: left;
    text-align: left;
    padding-bottom: 128px;
`

const LogoImage = styled.img`
    height: 32px;
`

const Comment = styled.blockquote`
    width: 580px;
    font-size: 28px;
    margin-left: 0;
`

const Staff = styled.figcaption`
    font-size: 18px;
`

const PhotoWrapper = styled.div`
`

const Photo = styled.img`
    height: 520px;
    width: 384px;
    
`