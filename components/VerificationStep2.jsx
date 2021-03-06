import React, { useState } from 'react'
import styled from 'styled-components'
import Image from "next/image";
import Step1 from '../public/step1.jpg'
import Step2 from '../public/step2.jpg'
import Step4 from '../public/step4.jpg'
import { SettingsCellOutlined } from '@material-ui/icons';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const VerificationStep2 = () => {
    const [toggled, setToggled] = useState(true);

    const toggleImage = () => setToggled(!toggled);

    return (
        <Container onClick={toggleImage}>
            {toggled && <Image src={Step2} width={500} height={750}/>}
          
        </Container>
    )
}

export default VerificationStep2
