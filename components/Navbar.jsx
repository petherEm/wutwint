import React from 'react'
import styled from 'styled-components'
import WUlogo from '../public/WU.svg'
import Image from 'next/image'


const Container = styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    background-color: black;
    color: white;
`
const NavLeft = styled.div`
    flex: 0.2;
    display: flex;
    align-items: center;
    cursor: pointer;
`
    
const NavRight = styled.div`
    flex: 0.8;
`

const Navbar = () => {
    return (
        <Container>
            <NavLeft>
                <Image src={WUlogo} />
            </NavLeft>
            <NavRight>

            </NavRight>
            
        </Container>
    )
}

export default Navbar
