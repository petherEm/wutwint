import React from 'react'
import styled from 'styled-components'
import Image from "next/image";
import IDNow from '../public/IDnow_Logo.jpeg';
import WUlogo from '../public/WU.png';


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    
    flex-direction: column;
    padding: 20px;


`

const TopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;


`
const WrapInputName = styled.div`
    
    padding: 0;
    margin: 0;
    font-size: 15px;
`

const InputName = styled.input`
    border: none;
    width: 90%;
    
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 15px;
    font-weight: 300;
    opacity: 0.8;
    &:focus {
        outline: none;
    }
`
    

const VerificationStep1 = () => {
    return (
        <Container>

            <Wrapper>
                <WrapInputName>First Name</WrapInputName>
                <InputName placeholder="First Name"></InputName>
                <WrapInputName>Last Name</WrapInputName>
                <InputName placeholder="Last Name"></InputName>
                <WrapInputName>Date of Birth </WrapInputName>
                <InputName placeholder="Date of Birth"></InputName>
                <WrapInputName>Nationality</WrapInputName>
                <InputName placeholder="Nationality"></InputName>
                <WrapInputName>ID type</WrapInputName>
                <InputName placeholder="ID type"></InputName>
                <WrapInputName>ID Issuer</WrapInputName>
                <InputName placeholder="ID Issuer"></InputName>
                <WrapInputName>ID Exp date</WrapInputName>
                <InputName placeholder="ID Exp date"></InputName>
                <WrapInputName>Confirm Phone Number</WrapInputName>
                <InputName placeholder="Confirm Phone Number"></InputName>
                <WrapInputName>Confirm Email</WrapInputName>
                <InputName placeholder="Confirm Email"></InputName>
                
            </Wrapper>
           


        </Container>
    )
}

export default VerificationStep1
