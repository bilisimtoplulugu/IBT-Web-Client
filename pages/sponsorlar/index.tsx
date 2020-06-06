import React, {useEffect} from 'react';
import Layout from '../../components/Layout';
import PageTopSide from '../../components/PageTopSide';
import {Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';
import Head from 'next/head';
import {auth} from '../../redux/actions/user';
import {useSelector, useDispatch} from 'react-redux';

const SponsorArea = styled.div`
  min-height: calc(100vh - 517px);
  margin: 50px 0;
  img {
    opacity: 0.5;
    width: 180px;
    transition: all 0.3s ease;
  }
  img:hover {
    opacity: 1;
    transform: scale(1.03);
    transition: all 0.3s ease;
  }
`;
export default function Sponsor() {
  const dispatch = useDispatch();
  const activeUser = useSelector((state) => state.userReducer);

  /* ABÇ: TEMP AUTH */
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token && Array.isArray(activeUser)) {
      dispatch(auth(token));
    }
  }, [auth]);

  return (
    <div>
      <Head>
        <title>
          Bilisimtoplulugu.org - İstanbul Bilişim Topluluğu, Bilişim
          Etkinlikleri - Sponsorlar
        </title>
        <link rel="canonical" href="https://bilisimtoplulugu.org/sponsorlar" />
        <meta
          name="description"
          content="Sponsorlarımız, İstanbul Bilişim Topluluğu’nun ve ona bağlı üniversite kulüplerinin düzenlediği bilişim etkinliklerinin iyileştirilmesi için bize destek sağlıyor."
        />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:type" content="article" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
        <meta property="og:image:alt" content="Sponsorlar" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image" content="/assets/images/socialLogo.png" />
        <meta
          property="og:image:secure_url"
          content="/assets/images/socialLogo.png"
        />
        <meta
          property="og:title"
          content="Bilisimtoplulugu.org - İstanbul Bilişim Topluluğu, Bilişim Etkinlikleri - Sponsorlar"
        />
        <meta
          property="og:description"
          content="Sponsorlarımız, İstanbul Bilişim Topluluğu’nun ve ona bağlı üniversite kulüplerinin düzenlediği bilişim etkinliklerinin iyileştirilmesi için bize destek sağlıyor."
        />
        <meta property="og:url" content="https://bilisimtoplulugu.org/" />
        <meta
          property="og:site_name"
          content="Bilisimtoplulugu.org - İstanbul Bilişim Topluluğu, Bilişim Etkinlikleri"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Bilisimtoplulugu.org - İstanbul Bilişim Topluluğu, Bilişim Etkinlikleri - Sponsorlar"
        />
        <meta
          name="twitter:description"
          content="Sponsorlarımız, İstanbul Bilişim Topluluğu’nun ve ona bağlı üniversite kulüplerinin düzenlediği bilişim etkinliklerinin iyileştirilmesi için bize destek sağlıyor."
        />
        <meta name="twitter:creator" content="@bilisimtopluluk" />
        <meta name="twitter:image" content="/assets/images/socialLogo.png" />
      </Head>

      <PageTopSide
        responsiveTop="40"
        responsiveHeight="300"
        bgImage="./../assets/images/homeBg.jpg"
        defaultHeight="250"
        title="Sponsorlar"
        desc="Sponsorlarımız, İstanbul Bilişim Topluluğu’nun ve ona bağlı üniversite kulüplerinin düzenlediği bilişim etkinliklerinin iyileştirilmesi için bize destek sağlıyor."
      />

      <Container>
        <SponsorArea>
          <Row>
            <Col xs={12} sm={6} md={3} className="text-center">
              <img src="/assets/images/webtekno-logo.png" />
            </Col>
            <Col xs={12} sm={6} md={3} className="text-center">
              <img src="/assets/images/webtekno-logo.png" />
            </Col>
            <Col xs={12} sm={6} md={3} className="text-center">
              <img src="/assets/images/webtekno-logo.png" />
            </Col>
            <Col xs={12} sm={6} md={3} className="text-center">
              <img src="/assets/images/webtekno-logo.png" />
            </Col>
          </Row>
        </SponsorArea>
      </Container>
    </div>
  );
}
