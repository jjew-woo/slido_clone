import styled from "styled-components"

interface UtilListProps {
    title: string;
    subCategory: any;
}

export default function UtilList({title, subCategory} : UtilListProps) {

    return (
        <Wrapper>
            <Title>{title}</Title>
            <List>
                {subCategory.map((category : any) => (
                    <Content>{category.name}</Content>
                ))}
            </List>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: block;
    text-align: left;
    margin-left: 100px;
`

const Title = styled.strong`
`

const List = styled.ul`
    list-style: none;
    padding-left: 0;
    text-align: left;
`

const Content = styled.li`
    padding: 10px 0;
    :hover{
        cursor: pointer;
        color: rgb(57, 172, 55);
        text-decoration: underline solid rgb(57, 172, 55);
    }
`


