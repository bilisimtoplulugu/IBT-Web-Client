import React, {useEffect, useState, useRef} from 'react';
import {Container, Row, Col, Form, Button, Card} from 'react-bootstrap';
import styled, {keyframes} from 'styled-components';
import WelcomeSlider from '../components/WelcomeSlider';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {useDispatch, useSelector} from 'react-redux';
import {auth} from '../redux/actions/user';

import Layout from '../components/Layout';
import Head from 'next/head';
import WelcomeInner from '../components/WelcomeInner';
import Link from 'next/link';

import AOS from 'aos';
import EventDateSlider from '../components/EventDateSlider';
import AboutArea from '../components/AboutArea';
import HomeEventCard from '../components/HomeEventCard';
import CareerTalksDetailCard from '../components/CareerTalksDetailCard';
import WebinarDetailCard from '../components/WebinarDetailCard';
import WorkshopDetailCard from '../components/WorkshopDetailCard';

const InstagramProfile = styled.div`
  background: #e1306c;
  padding: 15px 0;

  color: white;

  .instagramIcon {
    font-size: 23pt;
    opacity: 0.3;
    margin-right: 10px;
  }

  .message {
    font-weight: 400;
    display: inline-flex;
    line-height: 33px;
    font-size: 12pt;
    padding: 5px 0;
    margin-right: 30px;
  }
  text-align: center;

  a {
    background: #ca0a4a;
    border-color: #ca0a4a;
    opacity: 0.5;
    transition: all 0.3s ease;
    color: white;
  }
  a:hover {
    transition: all 0.3s ease;
    opacity: 1 !important;
    color: white;
  }

  @media (max-width: 1024px) {
    .message {
      line-height: 23px;
      font-size: 12pt;
      margin-right: unset;
      margin-bottom: 10px;
    }
    a {
      display: block;
      text-align: center;
      margin-left: unset;
    }
  }
`;

const InstagramInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    display: block;
    text-align: left;
  }
`;

const EventArea = styled.div`
  padding: 60px 0;
  .topSide {
    margin-bottom: 20px;
  }
  h2 {
    font-weight: 500;
    margin-bottom: 0 !important;

    color: #253a4a;
  }
  .subTitle {
    font-size: 20pt;
    font-weight: 500;
    opacity: 0.5;
  }
  .contentSide {
    margin-top: 20px;
  }
`;

const EventInfo = styled.div`
  h3 {
    padding: 10px;
    background: #0097e4;
    color: white;
    font-weight: 500;
    font-size: 16pt;
    display: block;
    opacity: 0.8;
    margin-bottom: 23px;
    border-radius: 5px;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  h3.active {
    opacity: 1;
    transition: all 0.3s ease;
    box-shadow: 0 3px 20px rgba(169, 169, 169, 0.5);
  }
  h3:hover {
    opacity: 1;
    transition: all 0.3s ease;
    box-shadow: 0 3px 20px rgba(169, 169, 169, 0.5);
  }
`;
export default function Home() {
  const [whichCard, setWhichCard] = useState(1);
  const dispatch = useDispatch();
  const activeUser = useSelector((state) => state.userReducer);

  useEffect(() => {
    AOS.init();
  });

  /* ABÇ: TEMP AUTH */
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token && Array.isArray(activeUser)) {
      dispatch(auth(token));
    }
  }, [auth]);

  const returnCard = () => {
    switch (whichCard) {
      case 1:
        return <CareerTalksDetailCard />;
      case 2:
        return <WorkshopDetailCard />;
      case 3:
        return <WebinarDetailCard />;
      default:
        return <CareerTalksDetailCard />;
    }
  };

  return (
    <Layout>
      <Head>
        <title>
          Bilisimtoplulugu.org - İstanbul Bilişim Topluluğu, Bilişim
          Etkinlikleri - Anasayfa
        </title>
        <link rel="canonical" href="https://bilisimtoplulugu.org/" />
        <meta
          name="description"
          content="İstanbul Bilişim Topluluğu olarak İstanbul'da bulunan üniversite kulüplerince düzenlenen bilişimle ilgili etkinliklerin paylaşıyor ve çeşitli bilişim etkinlikleri organize ediyoruz."
        />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:type" content="article" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
        <meta property="og:image:alt" content="Anasayfa" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image" content="/assets/images/socialLogo.png" />
        <meta
          property="og:image:secure_url"
          content="/assets/images/socialLogo.png"
        />
        <meta
          property="og:title"
          content="Bilisimtoplulugu.org - İstanbul Bilişim Topluluğu, Bilişim Etkinlikleri - Anasayfa"
        />
        <meta
          property="og:description"
          content="İstanbul Bilişim Topluluğu olarak İstanbul'da bulunan üniversite kulüplerince düzenlenen bilişimle ilgili etkinliklerin paylaşıyor ve çeşitli bilişim etkinlikleri organize ediyoruz."
        />
        <meta property="og:url" content="https://bilisimtoplulugu.org/" />
        <meta
          property="og:site_name"
          content="Bilisimtoplulugu.org - İstanbul Bilişim Topluluğu, Bilişim Etkinlikleri"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Bilisimtoplulugu.org - İstanbul Bilişim Topluluğu, Bilişim Etkinlikleri - Anasayfa"
        />
        <meta
          name="twitter:description"
          content="İstanbul Bilişim Topluluğu olarak İstanbul'da bulunan üniversite kulüplerince düzenlenen bilişimle ilgili etkinliklerin paylaşıyor ve çeşitli bilişim etkinlikleri organize ediyoruz."
        />
        <meta name="twitter:creator" content="@bilisimtopluluk" />
        <meta name="twitter:image" content="/assets/images/socialLogo.png" />
      </Head>

      <WelcomeInner />
      <InstagramProfile>
        <Container>
          <InstagramInner>
            <span className="message">
            <i className="fab fa-instagram instagramIcon"></i>
              Etkinliklerden ve duyurulardan haberdar olmak için bizi
              İnstagram'da takip Edin!
            </span>
            <Link href="">
              <a className="btn">Takip Et</a>
            </Link>
          </InstagramInner>
        </Container>
      </InstagramProfile>

      <EventArea>
        <Container>
          <div className="topSide" data-aos="fade-right">
            <h2>Yakındaki Etkinliklerimiz</h2>
            <span className="subTitle">Nelerdir?</span>
          </div>
          <Row>
            <Col xs={12}>
              <EventDateSlider />
            </Col>

            <Col xs={12}>
              <HomeEventCard />
            </Col>
          </Row>
        </Container>
      </EventArea>

      <AboutArea />

      <EventArea>
        <Container>
          <div className="topSide" data-aos="fade-right">
            <h2>Etkinliklerimiz</h2>
            <span className="subTitle">Nelerdir?</span>
          </div>

          <Row>
            <Col xs={12}>
              <div className="contentSide">
                <Row>
                  <Col xs={12} sm={6} md={4}>
                    <EventInfo
                      data-aos="fade-right"
                      onClick={() => setWhichCard(1)}
                    >
                      <h3 className={whichCard === 1 ? 'active' : null}>
                        Kariyer Sohbetleri
                      </h3>
                    </EventInfo>
                  </Col>
                  <Col xs={12} sm={6} md={4}>
                    <EventInfo
                      data-aos="fade-right"
                      onClick={() => setWhichCard(2)}
                    >
                      <h3 className={whichCard === 2 ? 'active' : null}>
                        Workshop Çalışmaları
                      </h3>
                    </EventInfo>
                  </Col>
                  <Col xs={12} sm={6} md={4}>
                    <EventInfo
                      data-aos="fade-right"
                      onClick={() => setWhichCard(3)}
                    >
                      <h3 className={whichCard === 3 ? 'active' : null}>
                        Online Seminerler
                      </h3>
                    </EventInfo>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12}>{returnCard()}</Col>
          </Row>
        </Container>
      </EventArea>
    </Layout>
  );
}
