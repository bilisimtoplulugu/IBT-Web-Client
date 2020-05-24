import React from 'react'
import Layout from '../../components/Layout'
import PageTopSide from '../../components/PageTopSide'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components';
import Head from 'next/head';


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
            <Head>
            <title>Bilisimtoplulugu.org - İstanbul Bilişim Topluluğu, Bilişim Etkinlikleri - Sponsorlar</title>
            <link rel="canonical" href="https://bilisimtoplulugu.org/sponsorlar" />
          
                <meta property="og:locale" content="tr_TR" />
                <meta property="og:type" content="article" />
                <meta property="og:image:width" content="1024"/>
                <meta property="og:image:height" content="1024"/>
                <meta property="og:image:alt" content="Sponsorlar"/>
                <meta property="og:image:type" content="image/png"/>
                <meta property="og:image" content="/assets/images/socialLogo.png" />
                <meta property="og:image:secure_url" content="/assets/images/socialLogo.png" />
                <meta property="og:title" content="Bilisimtoplulugu.org - İstanbul Bilişim Topluluğu, Bilişim Etkinlikleri - Sponsorlar" />
                <meta property="og:description" content="Kredi kartı ve nakit ile kolayca ve güvenli bir şekilde Bitcoin, Ethereum, Ripple, Litecoin, Tether ve Stellar satın alabilir, dilerseniz Bitcoin, Ethereum, Rip" />
                <meta property="og:url" content="https://bilisimtoplulugu.org/" />
                <meta property="og:site_name" content="Bilisimtoplulugu.org - İstanbul Bilişim Topluluğu, Bilişim Etkinlikleri"  />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Bilisimtoplulugu.org - İstanbul Bilişim Topluluğu, Bilişim Etkinlikleri - Sponsorlar" />
                <meta name="twitter:description" content="Kredi kartı ve nakit ile kolayca ve güvenli bir şekilde Bitcoin, Ethereum, Ripple, Litecoin, Tether ve Stellar satın alabilir, dilerseniz Bitcoin, Ethereum, Rip" />
                <meta name="twitter:creator" content="@bilisimtopluluk" />
                <meta name="twitter:image" content="/assets/images/socialLogo.png" />
                
            </Head>

            
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
