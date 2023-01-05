import { useEffect, useState } from "react";
import styled from "styled-components";
import SwiperSlide from "./SwiperSlide";

// To Do - 무한 슬라이드 구현하기
export default function Carousel() {
    // const pageCount = 3;
    // const [pageCount, setPageCount] = useState<number>(0);
    const [page, setPage] = useState<number>(0);
    const [slide, setSlide] = useState<any[]>([]);
    const [current, setCurrent] = useState<any[]>([]);

    function CurrentPage(idx: number) {
        const len = slide.length
        if (idx === 0) {
            setCurrent([slide[len-1], slide[idx], slide[(idx+1)%len]])
        }
        else {
            setCurrent([slide[idx-1], slide[idx], slide[(idx+1)%len]])
        }
    }

    const showNext = () : void => {
        const next = (page+1)%slide.length;
        setPage(next);
        CurrentPage(next);
    }

    const showPrev = () : void => {
        let prev = page-1;
        if (prev === -1) {
            prev = slide.length-1;
        }
        setPage(prev);
        CurrentPage(prev);
    }

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch('/mock/customers.json');
            const result = await response.json();
            const content = result.reviewList;
            setSlide(content);
        }
        
        fetchPosts();
    }, [])

    return (
        <Wrapper>
            <Title>Trusted by 860K customers worldwide</Title>
            <ContentArea page={page}>
                <SlideTrack length={slide.length} page={page}>
                    {slide.map((s) => (
                        <SwiperSlide
                            index={s.id}
                            comment={s.comment}
                            staff={s.staff}
                            companyLogo={s.companyLogo}
                            photoUrl={s.staffPhoto}
                        />
                    ))}
                </SlideTrack>
                <Constrols>
                    <Button onClick={showPrev}><ButtonImg src="https://www.slido.com/_next/static/media/slide-prev.2e3ab4ae.svg"/></Button>
                    <Pagenation><span>{page+1}</span>/<span>{slide.length}</span></Pagenation>
                    <Button onClick={showNext}><ButtonImg src="https://www.slido.com/_next/static/media/slide-next.93238f3c.svg"/></Button>
                </Constrols>
            </ContentArea>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 104px;
    
`

const Title = styled.h2`
    display: block;
    font-size: 48px;
    margin: 0;
`

const SlideTrack = styled.div`
    display: flex;
    width: 100vw;
    height: 528px;
    /* margin-left : -1073px; */
    transform: ${(props) => `translateX(${(-1073 * props.page)}px)`};
    transition-duration: 300ms;
`

const ContentArea = styled.div`
    display: flex;
    width: 1072px;
    height: 528px;
    overflow: hidden;
    transform: translateX(0);
`

const Constrols = styled.div`
    position: absolute;
    display: flex;
    z-index: 3;
    top: 30rem;
`

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
`

const ButtonImg = styled.img`
    display: block;
`

const Pagenation = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    margin: 0 1rem;
`