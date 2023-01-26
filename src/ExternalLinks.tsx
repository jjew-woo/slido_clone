import { useEffect, useState } from "react"
import styled from "styled-components"

export default function ExternalLinks() {
    const [badges, setBadges] = useState<Array<any>>([])
    const [socials, setSocials] = useState<Array<any>>([])
    const [languages, setLanguages] = useState<Array<any>>([])
    
    useEffect(() => {
        async function getBadges() {
            const response = await fetch('/mock/badges.json');
            const result = await response.json();
            const data = result.result;
            setBadges(data);
        }

        async function getSocialIcon() {
            const response = await fetch('/mock/socials.json');
            const result = await response.json();
            const data = result.result;
            const language = result.language;
            setSocials(data);
            setLanguages(language);
        }
        
        getBadges();
        getSocialIcon();
    }, [])

    return (
        <Background>
            <Wrapper>
                <ContentWrapper>
                    {badges.map((badge:any) => (
                        <Badge src={badge.badge} alt="" />
                    ))}
                </ContentWrapper>
                <ContentWrapper>
                    {socials.map((social:any) => (
                        <SocialIcon src={social.icon} alt="" />
                    ))}
                </ContentWrapper>
                <ContentWrapper>
                    <LegalLink>Privacy Settings</LegalLink>
                    <LegalLink>Status Page</LegalLink>
                </ContentWrapper>
                <ContentWrapper>
                    <Label>Choose a language:</Label>
                    <Select>
                        {languages.map((language) => (
                            <option value={language.value}>{language.title}</option>
                        ))}
                    </Select>
                </ContentWrapper>
            </Wrapper>
        </Background>
    )
}

const Background = styled.div`
    display: flex;
    height: 130px;
    width: 100%;
    background-color: #f5f5f5;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    width: 80vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ContentWrapper = styled.div`
    display: flex;
    height: 88px;
    justify-content: space-between;
    align-items: center;
`

const Badge = styled.img`
    height: 88px;
    margin: 0 -50px;
`

const SocialIcon = styled.img`
    height: 32px;
    margin-left: 15px;
`

const LegalLink = styled.a`
    padding: 1px 20px;
    :hover{
        cursor: pointer;
        color: rgb(57, 172, 55);
        text-decoration: underline solid rgb(57, 172, 55);
    }
`

const Label = styled.label`
    font-weight: 700;
`

const Select = styled.select`
    border: none;
    background-color: transparent;
`