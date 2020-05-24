import React from 'react'
import Layout from '../../components/Layout'
import PageTopSide from '../../components/PageTopSide'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components';


const SponsorArea = styled.div`

min-height: calc(100vh - 517px);
margin:50px 0;
img{
    opacity:.5;
    width:180px;
    transition:all .3s ease;
}
img:hover{
    opacity:1;
    transform:scale(1.03);
    transition:all .3s ease;
}
`;
export default function Sponsor() {
    return (
        <Layout>
            <PageTopSide responsiveTop="40" responsiveHeight="300" bgImage="./../assets/images/homeBg.jpg" defaultHeight="250" title="Sponsorlar" desc="İstanbul Bilişişim Topluluğu'nun gelişmesinde yardımcı olan sponsorlarımızı görebilirsiniz." />

            <Container>
                <SponsorArea>
                    <Row>
                        <Col xs={12} sm={6} md={3} className="text-center">

                            <img src="/assets/images/webtekno-logo.png" />
                        </Col>
                    </Row>
                </SponsorArea>
            </Container>

        </Layout>
    )
}
