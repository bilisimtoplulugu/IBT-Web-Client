import React, {useEffect, useState} from 'react';
import Layout from '../../components/Layout';
import {useRouter} from 'next/router';
import PageTopSide from '../../components/PageTopSide';
import styled from 'styled-components';
import {Container, Row, Col, Card} from 'react-bootstrap';
import {
  faClock,
  faVideo,
  faUsers,
  faHeadphones,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Head from 'next/head';
import {auth} from '../../redux/actions/user';
import {useDispatch, useSelector} from 'react-redux';
import isoToNormal from '../../utils/isoToNormal';
import getEvent from '../../api/event/getEvent';
import join from '../../api/event/join';
import unjoin from '../../api/event/unjoin';

import CustomCard from '../../components/CustomCard';

import {API_URL} from '../../config';

const EventDetailArea = styled.div`
margin-top:50px;
.topSide{
    border-bottom:1px solid #f5f5f5;
    padding-bottom:10px;
    margin-bottom 10px;
}
.title{
    font-weight: 600;
    margin-bottom: 0 !important;
    font-size: 13pt;
    display:block;
    color: #253a4a;
}
.subTitle{
    font-size: 15pt;
    font-weight: 500;
    opacity: .5;
}
.contentSide{
    margin-top:20px;
}

img{
    width:100%;
    border-radius:5px;
}
  position:relative;



.clock {
  font-size: 12pt;
  font-weight: 400;
  padding-left: 15px;
}


.participants {
  display: inline-flex;

  & ul {
    padding-left: 15px;
    margin: 0;
    list-style: none;
  }
}

`;

const FilterButton = styled.a`
  font-size: 17pt;
  color: #fff !important;
  padding-left: 20px;
  padding-right: 20px;
  background: #0097e4;
  border-radius: 5;

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

const AttendArea = styled.div`
  margin-top: 50px;
  background: #253b4b;
  color: white;
  position: sticky;
  padding: 10px 0;
  bottom: 0;
  span {
    display: block;
    font-weight: 400;
    font-size: 15pt;
  }
  .attendClock {
    opacity: 0.5;
  }
`;

const ParticipantsArea = styled.div`
  .card {
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
    margin-bottom: 15px;
    min-height: 175px;
  }

  .card:hover {
    transition: all 0.3s ease;
    transform: scale(1.04);
    box-shadow: 0 3px 20px rgba(169, 169, 169, 0.2);
  }
  h2 {
    font-weight: 500;
    margin-bottom: 0 !important;
    color: #253a4a;
    font-size: 20pt;
  }
  img {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    margin-bottom: 15px;
  }
  span {
    font-weight: 500;
    display: block;
    font-size: 12pt;
  }

  @media (max-width: 768px) {
    .card:hover {
      transition: all 0.3s ease;
      transform: unset;
      box-shadow: 0 3px 20px rgba(169, 169, 169, 0.2);
    }
    .testimonial-group > .row {
      overflow-x: auto;

      flex-wrap: nowrap;
    }
  }
  .seeAll {
    opacity: 0.5;
    text-decoration: none;
    color: #253a4a;
    transition: all 0.3s ease;
  }
  .seeAll:hover {
    opacity: 1;
    transition: all 0.3s ease;
  }
`;

const RightContent = styled.div`
  .clock {
    display: unset;
  }
`;

export default function EventDetail() {
  const [eventData, setEventData] = useState('');
  const [eventParticipants, setEventParticipants] = useState('');
  const [isRegisteredToEvent, setIsRegisteredToEvent] = useState(false);
  const activeUser = useSelector((state) => state.userReducer);
  const router = useRouter();
  const dispatch = useDispatch();
  const eventURL = router.query.slug;

  useEffect(() => {
    getEventData();
  }, [eventURL, activeUser]);

  /* ABÇ: TEMP AUTH */
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token && Array.isArray(activeUser)) {
      dispatch(auth(token));
    }
  }, [auth]);

  const joinToEvent = async () => {
    await join(activeUser._id, eventData._id);
    dispatch(auth(localStorage.getItem('jwt')));
  };

  const unjoinFromEvent = async () => {
    await unjoin(activeUser._id, eventData._id);
    setIsRegisteredToEvent(false);
    dispatch(auth(localStorage.getItem('jwt')));
  };

  const getEventData = async () => {
    if (!eventURL) return;
    try {
      const {event, participants} = await getEvent(eventURL);
      setEventData(event);
      setEventParticipants(participants);
      if (!Array.isArray(activeUser)) {
        activeUser.joinedEvents.map((joinedEvent) => {
          if (joinedEvent._id == event._id) setIsRegisteredToEvent(true);
        });
      }
    } catch (error) {
      return router.push('/404'); // event could not found so redirect to 404
    }
  };

  const addDefaultSrc = async (e) => {
    e.target.src = '/assets/images/default.png';
  };

  return (
    <div>
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
        responsiveHeight="300"
        bgImage="./../assets/images/homeBg.jpg"
        defaultHeight="300"
        title={eventData.title}
        desc={eventData.subtitle}
      />

      <EventDetailArea>
        <Container>
          <Row>
            <Col xs={{order: 2, span: 12}} md={{order: 1, span: 8}}>
              <CustomCard>
                <img
                  className="mb-3"
                  src={`${API_URL}/images/event/${eventData.seoUrl}.png`}
                />
                <span className="subTitle ">Detaylar</span>
                <p>{eventData.description}</p>
              </CustomCard>
            </Col>
            <Col
              xs={{order: 1, span: 12}}
              md={{order: 2, span: 4}}
              className="mb-3 "
            >
              <CustomCard>
                <RightContent>
                  <div className="topSide">
                    <h3 className="subTitle">Organizatör</h3>
                    <span className="title">{eventData.organizer}</span>
                  </div>
                  <div className="mb-3">
                    <i className="fas fa-user-edit"></i>
                    <span className="clock">{isoToNormal(eventData.date)}</span>
                  </div>
                  <div className="mb-3">
                    <i className="fas fa-users"></i>
                    <div className="participants">
                      <ul>
                        {eventData &&
                          eventData.guests.map((guest, index) => (
                            <li key={index}>{guest}</li>
                          ))}
                      </ul>
                    </div>
                  </div>
                  {eventData.moderator && (
                    <div className="mb-3">
                      <i className="fas fa-headphones"></i>
                      <span className="clock">{eventData.moderator} </span>
                    </div>
                  )}
                  {eventData.isOnline && (
                    <div className="mb-3">
                      <i className="fas fa-video"></i>
                      <span className="clock">Online Etkinlik</span>
                    </div>
                  )}
                </RightContent>
              </CustomCard>
            </Col>
            <Col
              xs={{order: 3, span: 12}}
              md={{order: 3, span: 8}}
              className="mt-5"
            >
              <ParticipantsArea>
                <Row>
                  <Col>
                    <h2>Katılımcılar</h2>
                  </Col>
                  <Col className="d-flex align-items-center justify-content-end">
                    {/* <Link href={`/etkinlikler/${eventURL}/katilimcilar`} passHref={true}> */}
                    <Link
                      href={`/etkinlikler/[slug]/katilimcilar`}
                      as={`/etkinlikler/${eventURL}/katilimcilar`}
                    >
                      <a className="seeAll">Tümünü Gör</a>
                    </Link>
                  </Col>
                </Row>
                <div className="testimonial-group">
                  <Row className="mt-4">
                    {eventParticipants &&
                      eventParticipants.map((participant) => (
                        <Link
                          href={`/[slug]`}
                          as={`/${participant.username}`}
                          passHref={true}
                          key={participant._id}
                        >
                          <Col xs={6} sm={4} lg={3}>
                            <CustomCard>
                              <img
                                onError={addDefaultSrc}
                                src={`${API_URL}/images/${participant._id}.png`}
                                alt="profilePhoto"
                              />
                              <span>
                                {participant.name} {participant.surname}{' '}
                              </span>
                            </CustomCard>
                          </Col>
                        </Link>
                      ))}
                  </Row>
                </div>
              </ParticipantsArea>
            </Col>
          </Row>
        </Container>
        <AttendArea>
          <Container>
            <Row>
              <Col xs={8} sm={6} className="d-none d-sm-block">
                <span className="attendClock">
                  {isoToNormal(eventData.date)}
                </span>
                <span>{eventData.subtitle}</span>
              </Col>
              <Col
                xs={12}
                sm={6}
                className="d-block d-sm-flex align-items-sm-center justify-content-sm-end"
              >
                {isRegisteredToEvent && (
                  <div className="text-right">
                    <span className="d-inline mr-2">Gidiyorsunuz</span>
                    <FilterButton className="btn" onClick={unjoinFromEvent}>
                      İptal Et
                    </FilterButton>
                  </div>
                )}
                {!isRegisteredToEvent && !Array.isArray(activeUser) && (
                  <div>
                    <FilterButton className="btn d-block" onClick={joinToEvent}>
                      Katıl
                    </FilterButton>
                  </div>
                )}
              </Col>
            </Row>
          </Container>
        </AttendArea>
      </EventDetailArea>
    </div>
  );
}
