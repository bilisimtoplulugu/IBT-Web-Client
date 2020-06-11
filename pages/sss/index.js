import React, { useEffect } from 'react';
import Head from 'next/head';
import PageTopSide from '../../components/PageTopSide';
import {Accordion, Button, Card, Container} from 'react-bootstrap';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {auth} from '../../redux/actions/user';

const TestArea = styled.div`
  padding: 50px 0;
  .accordion {
    box-shadow: 0 0px 20px rgba(169, 169, 169, 0.2);
  }
  .card {
    border: none;
  }
  .card-header {
    cursor: pointer;
    border: none;
    background: #fff;
  }
  .card-body {
    background: #f8f8f8;
  }
`;

export default function index() {
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
          Etkinlikleri - Sıkça Sorulan Sorular
        </title>
        <link rel="canonical" href="https://bilisimtoplulugu.org/etkinlikler" />

        <meta property="og:locale" content="tr_TR" />
        <meta property="og:type" content="article" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
        <meta property="og:image:alt" content="Etkinlikler" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image" content="/assets/images/socialLogo.png" />
        <meta
          property="og:image:secure_url"
          content="/assets/images/socialLogo.png"
        />
        <meta
          property="og:title"
          content="Bilisimtoplulugu.org - İstanbul Bilişim Topluluğu, Bilişim Etkinlikleri - Sıkça Sorulan Sorular"
        />
        <meta property="og:description" content="" />
        <meta property="og:url" content="https://bilisimtoplulugu.org/" />
        <meta property="og:site_name" content="" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Bilisimtoplulugu.org - İstanbul Bilişim Topluluğu, Bilişim Etkinlikleri - Sıkça Sorulan Sorular"
        />
        <meta name="twitter:description" content="" />
        <meta name="twitter:creator" content="@bilisimtopluluk" />
        <meta name="twitter:image" content="/assets/images/socialLogo.png" />
      </Head>

      <PageTopSide
        responsiveTop="40"
        responsiveHeight="250"
        bgImage="./../../assets/images/homeBg.jpg"
        defaultHeight="250"
        title="Sıkça Sorulan Sorular"
        /* desc="Career Talks #5" */
      />
      <Container>
        <TestArea>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Sertifikayı nasıl alabilirim, almak için napmalıyım?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Sertfiikam gelmedi?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                Canlı yayınlar kaydediliyor mu?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                Topluluğa nasil katilabilirim ?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </TestArea>
      </Container>
    </div>
  );
}
