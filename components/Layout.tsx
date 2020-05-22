import Header from "./Header";
import Head from "next/head";
import Footer from "./Footer";
import styled from "styled-components";

const Wrapper = styled.div`

background:#f8f8f8;
`;
function Layout({ children }) {
    return (

        <Wrapper>

            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </Wrapper>
    )
}

export default Layout;