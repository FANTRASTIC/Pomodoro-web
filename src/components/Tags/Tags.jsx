

import styled, {css} from 'styled-components'
import {useContext} from 'react'
import {StateContext} from '../StateProvider'

// Tags component
const Tags = () => {
    const {activeTag, setActiveTag}  = useContext(StateContext);
    

    // Function to handle tag click
    const handleTagClick = (index) => {
        setActiveTag(index);
    }

    return (
        <TagsContainer>
            {["Work","Short Break", "Long Break"].map((tag,index) => (
                <Tag activeTag={activeTag === index} onClick={() => handleTagClick(index)} key={index}>{tag}</Tag>
            ))}
        </TagsContainer>
    );
}

export default Tags

const TagsContainer = styled.div`
    background: ${(props) => props.theme.colors.secondary};
    height: 50px;
    width: 40rem;
    border-radius: 30px;
    margin: 0 auto;
    display: flex;
    gap: 1rem;
    align-items: center;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    cursor: pointer;
`

const Tag = styled.button`
    all: unset;
    flex: 1;
    height: 4rem;
    text-align: center;

    border-radius: 30px;
    font-size: 2rem;
    
    //the below uses styled-compnents {css} syntax, which overrides the default styles of the button
    ${({activeTag}) => activeTag && css`
        background: ${(props) => props.theme.colors.teritary};
        cursor: pointer;
       
    `}
    
`