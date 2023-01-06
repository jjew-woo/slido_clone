import { useEffect, useState } from "react"
import styled from "styled-components"
import UtilList from "./UtilList";

export default function Utils() {
    const [list, setList] = useState<any[]>([]);

    useEffect(() => {
        async function getList() {
            const response = await fetch('/mock/categories.json');
            const result = await response.json();
            const content = result.footer;
            console.log(content)
            setList(content);
        }

        getList()
    }, [])
    

    return (
        <Wrapper>
            <Logo src="/icons/ic_logo.svg" alt="logo"/>
            <ListWrapper>
                {list.map((l) => (
                    <UtilList
                        title={l.name}
                        subCategory={l.subCategories}
                    />
                ))}
            </ListWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    position: relative;
    padding: 0 32px;
    margin-bottom: 24px;
`

const Logo = styled.img`
    height: 24px;
`

const ListWrapper = styled.div`
    display: flex;
`