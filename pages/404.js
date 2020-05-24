import Layout from "../components/Layout";
import PageTopSide from '../components/PageTopSide'
import { Container } from "react-bootstrap";
// pages/404.js
export default function Custom404() {
    return(
        <Layout>
          
          <PageTopSide responsiveTop="40" responsiveHeight="300" bgImage="./../assets/images/homeBg.jpg" defaultHeight="250" title="404" desc="Aradığınız sayfa şu anda ulaşılabilir
          bir durumda değildir." />
            <div>
                <Container>

                </Container>
            </div>

        
        </Layout>
    )
  }