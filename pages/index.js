import Layout from "../components/Layout";
import styled from "styled-components";
import Image from "next/image";
import Link from 'next/link';
import TwintLogo from "../public/twint.png";
import TwintLogo2 from "../public/twint2.jpeg";
import TwintLogo3 from "../public/twint3.png";
import TwintLogo4 from "../public/twint4.png";


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    
`

const WrapperLeft = styled.div`
    flex: 0.7;
    display: flex;
    flex-direction: column;
    /* width: 30vw; */
    height: 90%;
    width: 100%;
    margin-right: 20px;
    border: 1px solid black;
    background-color: #f5f0f0;
`
const AppTitle = styled.div`
    border-bottom: 3px solid gold;
    margin: 0px;
    height: 80px;
    background-color: white;
`
const Title = styled.h3`
    text-align: center;
    letter-spacing: 1px;
`

const AppImageWrapper = styled.div`
    flex: 1;
    background-color: #fff;
`

const AppImage = styled.div`

    /* width: 250px;
    max-height: 70px; */
`

const BoxWrap = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
    padding: 10px;
    background-color: #f5f0f0;
`
const Box = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    width: 240px;
    height: 180px;
    margin: 5px;
    border-radius: 10px;
    background-color: white;
    cursor: pointer;

    border: ${props => props.primary ? " 1px solid red" : "none"};

`
const BoxIcon = styled.div`
    
    font-size: 18px;
    font-weight: 300;

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
    justify-content: space-between;
    align-items: center;
`
const Button = styled.button`
    font-size: 20px;
    font-weight: bold;
    width: 250px;
    height: 60px;
    margin: 0 10px 10px 10px;
    border: none;
    border-radius: 5px;
    background-color: gold;
    cursor: pointer;
`

const WrapperRight = styled.div`
    flex: 1.4;
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 30vw; */
    height: 90%;
    width: 100%;
    /* background-color: #eee121; */
    border: 1px solid black;

`

const Index = () => (

      
        <Layout>
            <Container>
                <WrapperLeft>
                    <AppTitle>
                        <Title>PostFinance TWINT</Title>
                    </AppTitle>
                    <AppImageWrapper>
                            <AppImage>
                                <Image src={TwintLogo4} height={350}/>
                            </AppImage>
                    </AppImageWrapper>
                    <BoxWrap>
                        <Link href="/sendmoney">
                        <Box primary>
                            <BoxIcon>Senden</BoxIcon>
                        </Box>
                        </Link>
                        <Box>
                            <BoxIcon>Anfordern & aufteilen</BoxIcon>
                        </Box>
                        <Box>
                            <BoxIcon>Bewegungen</BoxIcon>
                        </Box>
                        <Box>
                            <BoxIcon>TWINT+</BoxIcon>
                        </Box>
                    </BoxWrap>
                    <ButtonWrapper>
                        <ButtonTitle>Bezahlen mit</ButtonTitle>
                        <ButtonSpace>
                            <Button>Beacon</Button>
                            <Button>QR-Code</Button>
                        </ButtonSpace>
                        
                    </ButtonWrapper>
                    
                </WrapperLeft>
                <WrapperRight>
                    <h1>Wrapper 2</h1>
                </WrapperRight>
            </Container>
            
        </Layout>
    )


export default Index;