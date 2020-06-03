import React, {useEffect} from 'react';

import styled from 'styled-components';
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap';
import {faFortAwesome} from '@fortawesome/free-brands-svg-icons';
import {
  faLongArrowAltLeft,
  faArrowDown,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';

import Layout from '../../../components/Layout';
import PageTopSide from '../../../components/PageTopSide';
// import ProfileAllEventCard from '../../../components/ProfileAllEventCard'; / not found
import OrganizationEventCard from '../../../components/OrganizationEventCard';
import {useSelector, useDispatch} from 'react-redux';
import { auth } from '../../../redux/actions/user';
import { useRouter } from 'next/router';

const MainArea = styled.div`
  margin-bottom: 50px;

  .tabsArea {
    display: flex;
    justify-content: center;
    margin-top: -20px;
  }

  img {
    width: 100%;
  }
  color: rgb(37, 59, 75);

  .participantCard span {
    font-weight: 500;
    font-size: 13pt;
    display: block;
  }

  .form-group input {
    border: 1px solid #f1f1f1;
    font-size: 15pt;
    height: 55px;
    box-shadow: 0 0px 20px rgba(224, 224, 224, 0.4);
  }
  .backText {
    display: unset;
    padding-left: 15px;
  }
  .backArea {
    font-size: 20pt;
  }
`;

const CustomButton = styled(Button)`
  font-size: 14pt;
  font-weight: 400;
  color: #fff !important;
  border-radius: 5px;
  padding-left: 20px;
  padding-right: 20px;

  background: #0097e4;
  border: none;
  transition: all 0.3s ease;
  &:hover {
    background: #019eef;
    border-color: #019eef;

    transition: all 0.3s ease;
  }

  @media (max-width: 991px) {
    margin: 10px 0;
  }
`;

export default function Participants() {
  const dispatch = useDispatch();
  const router = useRouter();
  const activeUser = useSelector((state) => state.userReducer);

  /* ABÇ: TEMP AUTH */
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token && Array.isArray(activeUser)) {
      dispatch(auth(token));
      return;
    }
    router.push('/');
  }, [auth]);

  return (
    <Layout>
      {/* <Head>
            <title>{eventData.title} - Bilisimtoplulugu.org - İstanbul Bilişim Topluluğu, Bilişim Etkinlikleri </title>
            <link rel="canonical" href="https://bilisimtoplulugu.org/etkinlikler" />
          
                <meta property="og:locale" content="tr_TR" />
                <meta property="og:type" content="article" />
                <meta property="og:image:width" content="1024"/>
                <meta property="og:image:height" content="1024"/>
                <meta property="og:image:alt" content="Etkinlikler"/>
                <meta property="og:image:type" content="image/png"/>
                <meta property="og:image" content="/assets/images/socialLogo.png" />
                <meta property="og:image:secure_url" content="/assets/images/socialLogo.png" />
                <meta property="og:title" content={eventData.title+ " - Bilisimtoplulugu.org - İstanbul Bilişim Topluluğu, Bilişim Etkinlikleri"} />
                <meta property="og:description" content="Kredi kartı ve nakit ile kolayca ve güvenli bir şekilde Bitcoin, Ethereum, Ripple, Litecoin, Tether ve Stellar satın alabilir, dilerseniz Bitcoin, Ethereum, Rip" />
                <meta property="og:url" content="https://bilisimtoplulugu.org/" />
                <meta property="og:site_name" content={eventData.title+ " - Bilisimtoplulugu.org - İstanbul Bilişim Topluluğu, Bilişim Etkinlikleri"}  />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={eventData.title+ " - Bilisimtoplulugu.org - İstanbul Bilişim Topluluğu, Bilişim Etkinlikleri"}  />
                <meta name="twitter:description" content="Kredi kartı ve nakit ile kolayca ve güvenli bir şekilde Bitcoin, Ethereum, Ripple, Litecoin, Tether ve Stellar satın alabilir, dilerseniz Bitcoin, Ethereum, Rip" />
                <meta name="twitter:creator" content="@bilisimtopluluk" />
                <meta name="twitter:image" content="/assets/images/socialLogo.png" />
                
            </Head> */}

      <PageTopSide
        responsiveTop="40"
        responsiveHeight="250"
        bgImage="./../../assets/images/homeBg.jpg"
        defaultHeight="250"
        title="Tüm Etkinlikler"
        desc=""
      />

      <MainArea>
        <Container>
          <Row className="tabsArea">
            <Col xs={12} lg={8}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col xs={12} className="backArea">
                      <CustomButton>
                        <i className="fas fa-chevron-left"></i>
                        <span className="backText">Profile geri dön</span>
                      </CustomButton>
                    </Col>
                    <Col xs={12}>
                      <Form className="mt-4 ">
                        <Form.Group controlId="formBasicEmail">
                          <Form.Control
                            type="email"
                            placeholder="Etkinlik Ara."
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col xs={12}>
                      <OrganizationEventCard
                        title="Career Talks #5"
                        content="Herkese merhaba!
                    İstanbul Bilişim Topluluğu olarak “Career Talks” serimize hız kesmeden devam ediyoruz.Bu
                     hafta bize optiWisdom ‘un kurucusu Doç.Dr. Şadi Evren Şeker eşlik ediyor."
                        img="imagesadi"
                      />
                    </Col>
                    <Col xs={12}>
                      <OrganizationEventCard
                        title="Career Talks #5"
                        content="Herkese merhaba!
                    İstanbul Bilişim Topluluğu olarak “Career Talks” serimize hız kesmeden devam ediyoruz.Bu
                     hafta bize optiWisdom ‘un kurucusu Doç.Dr. Şadi Evren Şeker eşlik ediyor."
                        img="imagesadi"
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </MainArea>
    </Layout>
  );
}
