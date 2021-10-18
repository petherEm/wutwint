import Layout from "../components/Layout";
import styled from "styled-components";


const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: red;
`

const Blog = () => (
    <Layout>
        <Container>
            <h1>Test</h1>
        </Container>
    </Layout>

)


export default Blog;