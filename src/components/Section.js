import React from 'react'
import styled from 'styled-components/macro';
import {BsArrowDown} from 'react-icons/bs'
import Fade from 'react-reveal/Fade'


const Section = ({title, description, image}) => {

    return (

    <Wrap bgImage={image}>

        <Fade bottom>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
            
        </ItemText>
        </Fade>

        <ButtonGroup>
        <Fade bottom>
            <TopButtons>
            <LeftButton>
                Custom Order
            </LeftButton>

            <RightButton>
                Existing Inventory
            </RightButton>

            </TopButtons>
            </Fade>
            <DownArrow />
        </ButtonGroup>
        
    </Wrap>
  )
}

const Wrap = styled.div`
    background-image: ${props=>`url("/images/${props.bgImage}")` };
    color: #393c41;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;

`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`


const ButtonGroup = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


`

const TopButtons = styled.div`
    display: flex;
    margin-bottom: 15vh;
    border:black;

    @media (max-width:1000px){
        margin: 0;
        display: flex;
        flex-direction: column;
        
    }

`

const LeftButton = styled.button`
    background-color: rgba(23,26,32,0.8);
    height: 4rem;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.8;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin:10vh 5vw;
    border: black;

    @media (max-width:1000px){
        margin: 1rem 0;
        
    }
`

const RightButton =styled.button`
 background-color: rgba(23,26,32,0.8);
    height: 4rem;
    width: 256px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.8;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin:10vh 5vw;
    background: white;
    opacity: 0.75;
    border: black;

    @media (max-width:1000px){
        margin: 1rem 0;
        
    }

`


const DownArrow = styled(BsArrowDown)`

    display: flex;
    justify-content: center;
    margin: 40px;
    cursor: pointer;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
    width: 25px;
    height: 25px;
    color: white;
`



export default Section;
