import Layout from "../components/Layout";
import styled from "styled-components";
import { AddAPhoto, ArrowBackIos, Gif, InsertPhoto } from "@material-ui/icons";
import Link from 'next/link';
import Image from "next/image";
import Announcement from "../components/Announcement";
import TwintLogo from "../public/twint.png";
import TwintLogo2 from "../public/twint2.jpeg";
import TwintLogo3 from "../public/twint3.png";
import WU from "../public/WU.png";
import VerificationStep1 from "../components/VerificationStep1";
import VerificationStep2 from "../components/VerificationStep2";
import VerificationStep3 from "../components/VerificationStep3";
import SendMoney1 from "../components/SendMoney1";

const Container = styled.div`
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    
`
const ContainerRedirect = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    
`

const WrapperLeft = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* width: 30vw; */
    height: 90vh;
    width: 600px;
    border: 1px solid black;
    
`

const WrapperLeftRedirect = styled.div`
    background-color: rgb(250, 222, 75);
    display: flex;
    
    flex-direction: column;
    /* width: 30vw; */
    height: 90vh;
    width: 600px;
    border: 1px solid black;
    
`
const AppTitle = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 3px solid gold;
    margin: 0px;
    height: 80px;
    background-color: white;
`
const TitleNav = styled.div`
    flex: 0.1;
    font-size: 40px;
    margin-left: 20px;
    cursor: pointer;

`
const Title = styled.h3`
    flex: 2;
    letter-spacing: 1px;
`
const TopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    
`
const TopButton = styled.button`
    display: flex;
    justify-content: space-around;
    align-items: center;

    font-size: 20px;
    border: none;
    width: 100%;
    height: 90%;
    margin: 10px;
    background-color: white;
    cursor: pointer;

    &:hover {
        border-bottom: 1px solid gold;
    }
`

const TopButtonDom = styled.button`
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    border: none;
    width: 100%;
    height: 90%;
    margin: 10px;
    background-color: white;
    border-bottom: 1px solid gold;
    cursor: pointer;

`

const MainWrapper = styled.div`
    flex: 1;
    margin-left: 20px;
`



const WrapLabel = styled.div`
    color: gray;
    font-weight: 300;
    margin-top: 20px;
`

const WrapInputAmount = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
`
const Input = styled.input`
    border: none;
    width: 90%;
    height: 90%;
    text-align: center;
    font-size: 50px;
    font-weight: 600;
    opacity: 0.4;
    &:focus {
        outline: none;
    }
    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    } 


`

const Sections = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    height: 70px;
    
`

const IconSection = styled.div`
    
    color: blue;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
`

const WrapInputName = styled.div``

const InputName = styled.input`
    border: none;
    width: 90%;
    height: 20%;
    margin-top: 10px;
    text-align: center;
    font-size: 25px;
    font-weight: 400;
    opacity: 0.4;
    &:focus {
        outline: none;
    }
`

const ButtonWrapper = styled.div`
    flex: 0.5;
    display: flex;
    flex-direction: column;
    ;
`
const ButtonTitle = styled.h5`
    margin: 1px;
    text-align: center;
    margin-bottom: 5px;
`
const ButtonSpace = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Button = styled.button`
    font-size: 20px;
    font-weight: bold;
    width: 550px;
    height: 60px;
    margin: 0 10px 10px 10px;
    border: none;
    border-radius: 5px;
    background-color: gold;
    cursor: pointer;
`



const SendMoney = () => (
        <Layout>
            <Container id="Domestic">
                <WrapperLeft>
                    <AppTitle>
                        <TitleNav><Link href="/"><ArrowBackIos /></Link></TitleNav>
                        <Title>PostFinance TWINT <b>Senden</b></Title>
                    </AppTitle>
                    <TopWrapper>
                        <TopButtonDom>Domestic</TopButtonDom>
                        <Link href="#InternationalMT">
                            <TopButton>International  with <Image src={WU} width={80} height={50} /></TopButton>
                        </Link>
                    </TopWrapper>
                    <MainWrapper>
                        <WrapLabel>
                            BETRAG
                        </WrapLabel>
                        <WrapInputAmount>
                            <Input placeholder="CHF 0.00" type="number"/>
                        </WrapInputAmount>
                        <WrapLabel>
                            KONTAKTE
                        </WrapLabel>
                        <WrapInputName>
                            <InputName placeholder="Kontakt auswahlen" />
                        </WrapInputName>
                        <WrapLabel>
                            NACHRICHT
                        </WrapLabel>
                        <WrapInputName>
                            <InputName placeholder="Nachricht hinzufugen" />
                        </WrapInputName>
                        
                        <Sections>
                            <IconSection><Gif style={{ fontSize: 40 }}/></IconSection>
                            <IconSection><InsertPhoto style={{ fontSize: 40 }}/></IconSection>
                            <IconSection><AddAPhoto style={{ fontSize: 40 }}/></IconSection>
                        </Sections>
                    
                    </MainWrapper>
                    
                    
                    
                    
                    <ButtonWrapper>
    
                        <ButtonSpace>
                            <Button>Geld senden</Button>
                        </ButtonSpace>
                        
                    </ButtonWrapper>
                    
                </WrapperLeft>
            </Container>

            {/* NEXT SCREEN */}
            <Container id="InternationalMT">
                <WrapperLeft>
                    <AppTitle>
                        <TitleNav><Link href="/"><ArrowBackIos /></Link></TitleNav>
                        <Title>PostFinance TWINT <b>Senden</b></Title>
                    </AppTitle>
                    <TopWrapper>
                        <Link href="#Domestic">
                            <TopButton>Domestic</TopButton>
                        </Link>
                        <TopButtonDom>International  with <Image src={WU} width={80} height={50} /></TopButtonDom>
                    </TopWrapper>
                    <MainWrapper>
                        <Announcement />
                        
                    </MainWrapper>
                    
                    
                    
                    
                    <ButtonWrapper>
    
                        <ButtonSpace>
                            <Link href="#IDNow">
                                <Button>Start Verification</Button>
                            </Link>    
                        </ButtonSpace>
                        
                    </ButtonWrapper>
                    
                </WrapperLeft>
            </Container>

            {/* NEXT SCREEN */}
            <Container id="IDNow">
                <WrapperLeft>
                    <AppTitle>
                        <TitleNav><Link href="#InternationalMT"><ArrowBackIos /></Link></TitleNav>
                        <Title>WU Verification process</Title>
                    </AppTitle>
                    <MainWrapper>
                        <VerificationStep1 />
                    </MainWrapper>
                    <ButtonWrapper>
    
                        <ButtonSpace>
                            <Link href="#instruction">
                                <Button>Next</Button>
                            </Link>
                        </ButtonSpace>
                        
                    </ButtonWrapper>
                </WrapperLeft>
            </Container>


            {/* NEXT SCREEN */}

            <Container id="instruction">
                <WrapperLeft>
                    <AppTitle>
                        <TitleNav><Link href="#IDNow"><ArrowBackIos /></Link></TitleNav>
                        <Title>WU Verification process</Title>
                    </AppTitle>
                    <MainWrapper>
                        <VerificationStep2 />
                    </MainWrapper>
                    <ButtonWrapper>
    
                        <ButtonSpace>
                            <Link href="#instruction2">
                                <Button>Next</Button>
                            </Link>
                        </ButtonSpace>
                        
                    </ButtonWrapper>
                </WrapperLeft>
            </Container>

            {/* NEXT SCREEN */}

            <Container id="instruction2">
                <WrapperLeft>
                    <AppTitle>
                        <TitleNav><Link href="#IDNow"><ArrowBackIos /></Link></TitleNav>
                        <Title>WU Verification process</Title>
                    </AppTitle>
                    <MainWrapper>
                        <VerificationStep3 />
                    </MainWrapper>
                    <ButtonWrapper>
    
                        <ButtonSpace>
                            <Link href="#SM1">
                                <Button>Next</Button>
                            </Link>
                        </ButtonSpace>
                        
                    </ButtonWrapper>
                </WrapperLeft>
            </Container>

            {/* NEXT SCREEN */}

            <ContainerRedirect>
                <WrapperLeftRedirect>
                        <SendMoney1 id="#SM1"/>
                        
            
                    
                </WrapperLeftRedirect>
            </ContainerRedirect>


        </Layout>
    )


export default SendMoney;