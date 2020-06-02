import React, {useState, useEffect} from 'react';
import Layout from '../../../../components/Layout';
import PageTopSide from '../../../../components/PageTopSide';
import styled from 'styled-components';
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap';
import {faFortAwesome} from '@fortawesome/free-brands-svg-icons';
import {useRouter} from 'next/router';
import {
  faLongArrowAltLeft,
  faArrowDown,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';
import CustomCard from '../../../../components/CustomCard';
import Link from 'next/link';
import getAllParticipants from '../../../../api/event/getAllParticipants';
import {API_URL} from '../../../../config';
import {useDispatch, useSelector} from 'react-redux';
import {auth} from '../../../../redux/actions/user';

const MainArea = styled.div`
  margin-bottom: 50px;
  .tabsArea {
    display: flex;
    justify-content: center;
    margin-top: -20px;
  }
  img {
    width: 72px;
    height: 72px;
    border-radius: 50%;
  }
  color: rgb(37, 59, 75);
  .participantCard span {
    font-weight: 500;
    font-size: 13pt;
    display: block;
  }
  .date {
    opacity: 0.5;
    font-weight: 400 !important;
  }
  .participantCard {
    border-bottom: 1px solid #f1f1f1;
    padding: 20px 0;
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
  const activeUser = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [allParticipants, setAllParticipants] = useState('');
  const router = useRouter();
  const eventURL = router.query.slug;

  /* ABÇ: TEMP AUTH */
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token && Array.isArray(activeUser)) {
      dispatch(auth(token));
    }
  }, [auth]);

  useEffect(() => {
    if (!eventURL) return;
    getParticipants();
  }, [eventURL]);

  const getParticipants = async () => {
    const res = await getAllParticipants(eventURL);
    setAllParticipants(res);
  };

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
        title="Katılımcılar"
        desc="Career Talks #5"
      />

      <MainArea>
        <Container>
          <Row className="tabsArea">
            <Col xs={12} lg={8}>
              <CustomCard>
                <Row>
                  <Col xs={12} className="backArea">
                    <CustomButton>
                      <i className="fas fa-chevron-left"></i>
                      <Link href={`/etkinlikler/${eventURL}`}>
                        <a>
                          <span className="backText">Etkinliğe Geri Dön</span>
                        </a>
                      </Link>
                    </CustomButton>
                  </Col>
                  <Col xs={12}>
                    <Form className="mt-4 ">
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control
                          type="email"
                          placeholder="Katılımcı ara."
                        />
                      </Form.Group>
                    </Form>
                  </Col>
                  {allParticipants &&
                    allParticipants.map((participant, index) => (
                      <Col xs={12} key={index}>
                        <div className="participantCard">
                          <Row className="align-items-center text-center text-sm-left">
                            <Col xs={12} sm={3} md={2}>
                              <img
                                src={`${API_URL}/images/${participant._id}.png`}
                              />
                            </Col>
                            <Col
                              xs={12}
                              sm={9}
                              md={10}
                              className="mt-3 mt-sm-0"
                            >
                              <span className="name">
                                {participant.name} {participant.surname}
                              </span>
                              <span className="date">
                                28 Mart 2020, Pazartesi
                              </span>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                    ))}
                </Row>
              </CustomCard>
            </Col>
          </Row>
        </Container>
      </MainArea>
    </Layout>
  );
}
