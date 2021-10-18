import React from 'react'
import styled from 'styled-components';
import Image from "next/image";
import IDNow from '../public/IDnow_Logo.jpeg';


const Container = styled.div`
    width: 100%;
    height: 80px;
    text-align: center;
    color: teal;

`



const Announcement = () => {
    return (
        <Container>
            <h3>Hi! Looks like this is your first international money transfer, we need to verify your identity</h3>
            <h4>We will smoothly guide you through 3 mins verification process powered by </h4>
            <Image src={IDNow} width={280} height={150} />
        
        </Container>
    )
}

export default Announcement
