import React from 'react';
import styled from 'styled-components/macro';
import {Link} from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';
import { useState } from 'react';
import {AiOutlineClose} from 'react-icons/ai'

const Header = () => {

const [isNav, setIsNav] = useState(false);

console.log(isNav);




    
  return (
    <Container>
        <a href='$'>
            <img
                src="/images/logo.svg"
                alt="/"
            />
        </a>

        <Menu>
            <p><Link to={"#"}>Model S</Link></p>
            <p><Link to={"#"}>Model 3</Link></p>
            <p><Link to={"#"}>Model X</Link></p>
            <p><Link to={"#"}>Model Y</Link></p>

        </Menu>

        <RightMenu>
            <p><Link to={"#"}>Shop</Link></p>
            <p><Link to={"#"}> Account </Link></p>

        
        </RightMenu>
        <HamburgerMenu isNav={isNav}>
            <BarWrapper>
                {
                    isNav?(

                        <MenuIcon onClick={()=> setIsNav(!isNav)}/>
                    ):(

                        <CloseIcon  onClick={()=> setIsNav(!isNav)}/>
                        
                    )
                }
            </BarWrapper>
            
            

            <p><Link to={"#"}>Model S</Link></p>
            <p><Link to={"#"}>Model 3</Link></p>
            <p><Link to={"#"}>Model X</Link></p>
            <p><Link to={"#"}>Model Y</Link></p>


        </HamburgerMenu>
    </Container>
  )
}


const Container = styled.div`
display: flex;
min-height: 8vh;
align-items: center;
position: fixed;
padding: 0 20px;
width: 100%;
justify-content: space-between;
z-index: 1;


p{
        padding: 0 10px;
        flex-wrap: nowrap;
        a{
            font-weight: 600;
            color: black;
            text-transform: uppercase;


        }
    }
`

const Menu = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

@media (max-width:1000px){
    display: none;
    width: 50px;
    cursor: pointer;
}


`


const RightMenu = styled.div`
    display: flex;
`

const HamburgerMenu = styled.div`
    display: none;
    @media (max-width:1000px){
    position: fixed;
    top: 0;
    background-color: white;
    width:330px; 
    height: 100%;
    right: ${({isNav})=> (isNav? "0" : "-1000px")};
    transition: transform 0.2s ease-in;
    z-index: 100;
    text-align: center;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;

    }

  
    & p{
        margin: 20px 0;
        font-size: 600;
        color: black;
        text-transform: uppercase;
    }



    
`

const MenuIcon = styled(GiHamburgerMenu)`
    display: flex;
    cursor: pointer;
`

const BarWrapper = styled.div`
display: flex;
justify-content: right;
`


const CloseIcon =  styled(AiOutlineClose)`
 
 cursor: pointer;
`



export default Header;