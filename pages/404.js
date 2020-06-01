import Layout from '../components/Layout';
import PageTopSide from '../components/PageTopSide';
import {Container} from 'react-bootstrap';
import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';
import React, {useState, useEffect, useDispatch} from 'react';
import AOS from 'aos';

import EventDateSlider from '../components/EventDateSlider';
import HomeEventCard from '../components/HomeEventCard';

const MainArea = styled.div`
  margin: 30px 0;
`;

export default function Custom404() {
  const [selectedEventId, setSelectedEventId] = useState(1);
  const dispatch = useDispatch();

  const handleSelectedEventId = (id) => {
    setSelectedEventId(id);
  };

  useEffect(() => {
    AOS.init();
  });

  useEffect(() => {
    dispatch(getNearEvents());
  }, []);

  return (
    <Layout>
      <Head>
        <title>
          Bilisimtoplulugu.org - İstanbul Bilişim Topluluğu, Bilişim
          Etkinlikleri - 404
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

      <PageTopSide
        responsiveTop="40"
        responsiveHeight="300"
        bgImage="./../assets/images/homeBg.jpg"
        defaultHeight="250"
        title="404"
        desc="Aradığınız sayfa şu anda ulaşılabilir
          bir durumda değildir."
      />
      <div>
        <Container>
          <MainArea>
            <h4>Belkide yakın zamandaki etkinliklere göz atmak istersiniz.</h4>

            <Row>
              <Col xs={12}>
                <EventDateSlider
                  handleSelectedEventId={handleSelectedEventId}
                />
              </Col>

              <Col xs={12}>
                <HomeEventCard selectedEventId={selectedEventId} />
              </Col>
            </Row>
          </MainArea>
        </Container>
      </div>
    </Layout>
  );
}
