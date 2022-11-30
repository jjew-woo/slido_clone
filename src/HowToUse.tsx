import styled from "styled-components"
import Post from "./Post"
import { useEffect, useState } from "react"

export default function HowToUse() {
    const [posts, setPosts] = useState<any[]>([])

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch('/mock/posts.json');
            const result = await response.json();
            setPosts(result.result)
        }
        
        fetchPosts();
    }, [])
    return (
        <Section>
            <Wrapper>
                <Title>Get inspired on how to use Slido</Title>
                <Contents>
                    {posts.map((post) => (
                        <Post thumb={post.thumbnail} text={post.title}/> 
                    ))}
                </Contents>
            </Wrapper>
        </Section>
    )
}

const Section = styled.div`
    width: 100vw;
    background-color: #f5f5f5;
`

const Wrapper = styled.div`
    margin: 0 120px;
    padding: 60px 50px 32px;
`

const Contents = styled.div`
    width: 1216px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.h2`
    font-size: 38px;

`