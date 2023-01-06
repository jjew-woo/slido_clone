import styled from "styled-components";

export default function PrivacyBanner() {

    return (
        <Wrapper>
            <ContentWrapper>
                <CookieImage src="/icons/privacy_img.svg"/>
                <TextWrapper>
                    <Title>Your privacy matters.</Title>
                    <p>We use <Link>cookies</Link> to improve your experience, analyze traffic, and serve personalized ads. <Link>Privacy settings.</Link></p>
                </TextWrapper>
            </ContentWrapper>
            <BtnWrapper>
                <Btn>Reject all</Btn>
                <Btn>Allow all</Btn>
            </BtnWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: fixed;
    //display: flex;
    bottom: 16px;
    right: 108px;
    height: 180px;
    width: 376px;
    padding: 32px;
    background-color: white;
    border-radius: 4px;
    box-shadow:rgba(0, 0, 0, 0.1) 0px 4px 12px 0px;
    z-index: 2;
`;

const ContentWrapper = styled.div`
    display: flex;
`;

const TextWrapper = styled.div`
    display: block;
    text-align: left;
`;

const Title = styled.h2`
    display: block;
    margin: 0;
`;

const CookieImage = styled.img`
    display: block;
    height: 113px;
    margin-right: 16px;
`;

const Link = styled.a`
    color: #39ac37;
    cursor: pointer;
    text-decoration: underline;
    &:hover {
        text-decoration: none;
    }
`;

const BtnWrapper = styled.div`
    width: 376px;
    justify-content: space-between;
    display: flex;
    margin-top: 16px;
`;

const Btn = styled.button`
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    width: 180px;
    padding: 1px 6px;
    border-radius: 4px;
    border: 1px solid #39ac37;
    color: #000;
    background-color: #fff;
    &:hover {
        color: #fff;
        background-color: #000;
        border: 1px solid #000;
    }
`