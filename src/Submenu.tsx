import { useState } from "react";
import styled from "styled-components";

interface SubmenuProps {
    subCategories: Array<any>;
}

export default function Submenu({subCategories} : SubmenuProps) {
    const [hoverMenu, setHoverMenu] = useState<number>(0);

    return (
        <Wrapper>
            <Background>
                <MenuList>
                {subCategories.map((category, idx) => (
                    <div>
                        <Menu onMouseEnter={() => {setHoverMenu(idx)}} isSelect={idx === hoverMenu}>{category.name}</Menu>
                    </div>
                ))}
                </MenuList>
                {subCategories[0].description &&
                    <Description>
                    {subCategories.map((category, idx) => (
                        idx === hoverMenu && 
                        <div>
                            <img src={category.icon} alt=""/>
                            <h2>{category.name}</h2>
                            <p>{category.description}</p>
                            <Button>Learn more</Button>
                        </div>
                    ))}
                    </Description>
                }
            </Background>
            
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
`

const Background = styled.div`
    /* height: 432px;
    width: 490px; */
    display: flex;
    position: absolute;
    background-color: #FFFFFF;
    border-radius: 4px;
    top: 40px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px 0px;
    padding: 15px 0;
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    width: 256px;
    background-color: #FFFFFF;
    border-radius: 4px;
    text-align: left;
    align-items: flex-start;
    justify-content: end;
    vertical-align: bottom;
    padding: 0 32px 20px 32px;
`

const Menu = styled.li`
    padding: 12px 32px;
    cursor: pointer;
    background-color: ${(props) => props.isSelect ? `#F5F5F5` : `#FFFFFF`};
    font-size: 16px;
`

const MenuList = styled.ul`
    list-style: none;
    text-align: left;
    padding-left: 0px;
`

const Button = styled.button`
    height: 24px;
    font-size: 16px;
    font-weight: 700;
    color: rgb(57, 172, 55);
    text-decoration: underline solid rgb(57, 172, 55);
	display: block;
    border:none;
	border-radius: 4px;
    box-shadow: none;
    background-color: white;
    padding: 0;
    &:hover {
        cursor: pointer;
        text-decoration: none solid rgb(57, 172, 55);
    }
`