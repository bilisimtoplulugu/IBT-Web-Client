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
import {auth} from '../../redux/actions/user';
import {useDispatch, useSelector} from 'react-redux';

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

const GroupButton = styled.div`
  box-shadow: 0 3px 20px rgba(169, 169, 169, 0.2);
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
const Filters = styled.div`
transition: all 0.3s ease;
@media(max-width:992px){
  z-index:6;
  display:none;
  background-color: white; */
    background: white;
    /* left: 0; */
    position: fixed;
    left: 0;
    right: 0;
    /* top: 0; */
    bottom: 0;
    padding: 15px;
    .closeButton{
      text-align: right;
      font-size: 20pt;
       padding: 15px 0;
    }
}
`;

const MainArea = styled.div`
  margin: 30px 0;
  .customSelect {
    border: none;
    box-shadow: 0 3px 20px rgba(169, 169, 169, 0.2);
  }

  .showFilters {
    display: block;
    transition: all 0.3s ease;
  }
  .overlay {
    transition: all 0.3s ease;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
    opacity: 0.5;
    z-index: 5;
  }
`;

export default function Event() {
  const [pastEvents, setPastEvents] = useState([]);
  const [showNewEvents, setShowNewEvents] = useState(true);
  const [showOldEvents, setShowOldEvents] = useState(false);

  const dispatch = useDispatch();
  const activeUser = useSelector((state) => state.userReducer);
  const nearEvents = useSelector((state) => state.eventReducer);

  const [mobileFilter, setmobileFilter] = useState(false);
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

  useEffect(() => {
    getPastEvents();
  }, []);

  /* TODO: send request from api folder instead of sending from component */
  const getPastEvents = async () => {
    try {
      const {data} = await axios.get('http://localhost:2222/event/past');
      setPastEvents(data);
    } catch (error) {
      console.log(error); //something went wrong
    }
  };

  return (
    <div>
      <Head>
        <title>
          Bilisimtoplulugu.org - İstanbul Bilişim Topluluğu, Bilişim
          Etkinlikleri - Etkinlikler
        </title>
        <link rel="canonical" href="https://bilisimtoplulugu.org/etkinlikler" />
        <meta
          name="description"
          content="İstanbul Bilişim Topluluğu olarak öğrencilerin sektörel gelişimleri için kariyer sohbetleri, workshop ve atölyeler, online seminerler gibi etkinlikler düzenliyoruz."
        />

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
          content="Bilisimtoplulugu.org - İstanbul Bilişim Topluluğu, Bilişim Etkinlikleri - Etkinlikler"
        />
        <meta
          property="og:description"
          content="İstanbul Bilişim Topluluğu olarak öğrencilerin sektörel gelişimleri için kariyer sohbetleri, workshop ve atölyeler, online seminerler gibi etkinlikler düzenliyoruz."
        />
        <meta property="og:url" content="https://bilisimtoplulugu.org/" />
        <meta
          property="og:site_name"
          content="Bilisimtoplulugu.org - İstanbul Bilişim Topluluğu, Bilişim Etkinlikleri"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Bilisimtoplulugu.org - İstanbul Bilişim Topluluğu, Bilişim Etkinlikleri - Etkinlikler"
        />
        <meta
          name="twitter:description"
          content="İstanbul Bilişim Topluluğu olarak öğrencilerin sektörel gelişimleri için kariyer sohbetleri, workshop ve atölyeler, online seminerler gibi etkinlikler düzenliyoruz."
        />
        <meta name="twitter:creator" content="@bilisimtopluluk" />
        <meta name="twitter:image" content="/assets/images/socialLogo.png" />
      </Head>

      <PageTopSide
        responsiveTop="40"
        responsiveHeight="300"
        bgImage="./../assets/images/homeBg.jpg"
        defaultHeight="300"
        title="Etkinlikler"
        desc="İstanbul Bilişim Topluluğu olarak öğrencilerin sektörel gelişimleri için kariyer sohbetleri, workshop ve atölyeler, online seminerler gibi etkinlikler düzenliyoruz."
      />

      <MainArea>
        <div
          className={mobileFilter ? 'overlay' : null}
          onClick={() => setmobileFilter(false)}
        ></div>
        <Container>
          <Row>
            <Col xs={12}>
              <div className="text-right">
                <div className="d-block d-lg-none">
                  <FilterButton
                    className="btn"
                    onClick={() => setmobileFilter(true)}
                  >
                    Filtreler
                  </FilterButton>
                </div>
                <Form.Group
                  className=" d-inline-block"
                  controlId="exampleForm.ControlSelect1"
                >
                  <Form.Control className="customSelect d-none" as="select">
                    <option>Sırala</option>
                    <option>İstanbul Bilişim Topluluğu</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
              </div>
            </Col>
            <Col xs={12} lg={3}>
              <div>
                <Filters className={mobileFilter ? 'showFilters' : null}>
                  <div className="d-block d-lg-none closeButton">
                    <i
                      className="fas fa-times"
                      onClick={() => setmobileFilter(false)}
                    ></i>
                  </div>
                  <GroupButton className="mb-4">
                    <FilterButton
                      className={showNewEvents ? 'btn active-button' : 'btn'}
                      onClick={() => {
                        setShowOldEvents(false);
                        setShowNewEvents(true);
                      }}
                    >
                      Yaklaşan Etkinlikler
                    </FilterButton>
                    <FilterButton
                      className={showOldEvents ? 'btn active-button' : 'btn'}
                      onClick={() => {
                        setShowOldEvents(true);
                        setShowNewEvents(false);
                      }}
                    >
                      Geçmiş Etkinlikler
                    </FilterButton>
                  </GroupButton>

                  <Form.Group
                    controlId="exampleForm.ControlSelect1"
                    className="d-none"
                  >
                    <Form.Label>Topluluklar</Form.Label>
                    <Form.Control className="customSelect" as="select">
                      <option>Hepsi</option>
                      <option>İstanbul Bilişim Topluluğu</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                </Filters>
              </div>
            </Col>

            {showNewEvents && (
              <Col xs={12} lg={9}>
                {nearEvents &&
                  nearEvents.map((event, index) => (
                    <EventPageCard event={event} key={index} />
                  ))}
              </Col>
            )}

            {showOldEvents && (
              <Col xs={12} lg={9}>
                {pastEvents &&
                  pastEvents.map((event, index) => (
                    <EventPageCard event={event} key={index} />
                  ))}
              </Col>
            )}
          </Row>
        </Container>
      </MainArea>
    </div>
  );
}
