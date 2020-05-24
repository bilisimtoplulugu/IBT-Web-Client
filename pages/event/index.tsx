import React, {useEffect, useState} from 'react';
import Layout from '../../components/Layout';
import Head from 'next/head';
import styled from 'styled-components';
import {Container, Row, Col, Form, Button, Card} from 'react-bootstrap';
import EventDateSlider from '../../components/EventDateSlider';
import HomeEventCard from '../../components/HomeEventCard';
import AOS from 'aos';
import PageTopSide from '../../components/PageTopSide';
import EventPageCard from '../../components/EventPageCard';
import axios from 'axios';

const FilterButton = styled.a`
  font-size: 11pt;
  color: #fff !important;
  padding-left: 20px;
  padding-right: 20px;
  opacity: 0.5;
  background: #0097e4;
  width: 100%;
  border-radius: 0;

  transition: all 0.3s ease;
  &:hover {
    background: #019eef;
    border-color: #019eef;

    transition: all 0.3s ease;
  }
  &:hover {
    opacity: 1;
  }
  @media (max-width: 991px) {
    margin: 10px 0;
  }
`;

const Filters = styled.div`
  box-shadow: 0 3px 20px rgba(169, 169, 169, 0.5);
  border-radius: 5px;
  overflow: hidden;
  .active-button {
    opacity: 1;
  }
  @media (max-width: 991px) {
    box-shadow: unset;

    a {
      margin: 0;
 

    }
  }
`;

const MainArea = styled.div`
  margin: 50px 0;
`;

export default function Event() {

  const [nearEvents, setNearEvents] = useState([]);

  useEffect(() => {
    AOS.init();
    getNearEvents();
  });

  const getNearEvents = async () => {
    const {data} = await axios.get('http://localhost:2222/event/near');
    setNearEvents(data);
  };

  return (
    <Layout>
         <Head>
            <title>Bilisimtoplulugu.org - İstanbul Bilişim Topluluğu, Bilişim Etkinlikleri - Etkinlikler</title>
            <link rel="canonical" href="https://bilisimtoplulugu.org/etkinlikler" />
          
                <meta property="og:locale" content="tr_TR" />
                <meta property="og:type" content="article" />
                <meta property="og:image:width" content="1024"/>
                <meta property="og:image:height" content="1024"/>
                <meta property="og:image:alt" content="Etkinlikler"/>
                <meta property="og:image:type" content="image/png"/>
                <meta property="og:image" content="/assets/images/socialLogo.png" />
                <meta property="og:image:secure_url" content="/assets/images/socialLogo.png" />
                <meta property="og:title" content="Bilisimtoplulugu.org - İstanbul Bilişim Topluluğu, Bilişim Etkinlikleri - Etkinlikler" />
                <meta property="og:description" content="Kredi kartı ve nakit ile kolayca ve güvenli bir şekilde Bitcoin, Ethereum, Ripple, Litecoin, Tether ve Stellar satın alabilir, dilerseniz Bitcoin, Ethereum, Rip" />
                <meta property="og:url" content="https://bilisimtoplulugu.org/" />
                <meta property="og:site_name" content="Bilisimtoplulugu.org - İstanbul Bilişim Topluluğu, Bilişim Etkinlikleri"  />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Bilisimtoplulugu.org - İstanbul Bilişim Topluluğu, Bilişim Etkinlikleri - Etkinlikler" />
                <meta name="twitter:description" content="Kredi kartı ve nakit ile kolayca ve güvenli bir şekilde Bitcoin, Ethereum, Ripple, Litecoin, Tether ve Stellar satın alabilir, dilerseniz Bitcoin, Ethereum, Rip" />
                <meta name="twitter:creator" content="@bilisimtopluluk" />
                <meta name="twitter:image" content="/assets/images/socialLogo.png" />
                
            </Head>

      <PageTopSide
      responsiveTop="40" responsiveHeight="300"
      bgImage="./../assets/images/iamge.jpg"
        defaultHeight="300"
        title="Etkinlikler"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      />

      <MainArea>
        <Container>
          <Row>
            <Col xs={12} lg={3}>
              <Filters>
                <FilterButton className="btn active-button">
                  Yaklaşan Etkinlikler
                </FilterButton>
                <FilterButton className="btn ">Geçmiş Etkinlikler</FilterButton>
              </Filters>
            </Col>

            <Col xs={12} lg={9}>
              {nearEvents &&
                nearEvents.map((event, index) => (
                  <EventPageCard event={event} key={index} />
                ))}
            </Col>
          </Row>
        </Container>
      </MainArea>
    </Layout>
  );

}
