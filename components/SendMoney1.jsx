import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'


const Container = styled.div`
    
    display: flex;
    align-items: center;
    padding: 20px;
    width: 80%;
    height: auto;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    
`
const TopDescription = styled.h2`

`
const LittleDesc = styled.h4`
    margin: 0 10px 10px 0;
    font-weight: 300;
`

const Label = styled.h4`
    font-weight: 300;
`

const Input = styled.select`
    padding: 10px;
    margin-bottom: 20px;
    border: none;
    border-radius: 20px;
    width: 500px;
    height: 80px;
    font-size: 20px;
    font-weight: 300;
    opacity: 0.8;
    &:focus {
        outline: none;
    }
`



const Option = styled.option`
    padding: 10px;
    margin: 10px;
`

const SendMoney1 = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Wrapper>
                    <TopDescription>
                        Send Money Your Way with Western
                    </TopDescription>
                    <LittleDesc>Easy, Fast, Reliable </LittleDesc>
                    
                    <Input placeholder="Send To">
                        <Option disabled>Send To</Option>
                        <Option>Turkey</Option>
                        <Option>Germany</Option>
                        <Option>Poland</Option>
                        <Option>United Kingdom</Option>

                    </Input>
                    <Input type="number" placeholder="Amount in CHF">
                        
                    </Input>
                </Wrapper>
            </Container>
        </>
    )
}

export default SendMoney1
