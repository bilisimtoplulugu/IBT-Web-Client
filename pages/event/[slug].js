import React, {useEffect, useState} from 'react';
import Layout from '../../components/Layout';
import {useRouter} from 'next/router';
import PageTopSide from '../../components/PageTopSide';
import axios from 'axios';
import styled from 'styled-components';
import {Container, Row, Col, Card} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faClock,
  faVideo,
  faUsers,
  faHeadphones,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

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

const CustomCard = styled(Card)`
  box-shadow: 0 0px 20px rgba(169, 169, 169, 0.2);
  border: none;
  color: rgb(37, 59, 75);

  .clock {
    font-size: 12pt;
    font-weight: 400;
    padding-left: 15px;
  }

  .rightContent svg {
    font-size: 15pt;
    opacity: 0.5;
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

export default function EventDetail() {
  const [eventData, setEventData] = useState('');
  const [eventParticipants, setEventParticipants] = useState('');
  const router = useRouter();

  useEffect(() => {
    getEventData();
  }, [router]);

  const getEventData = async () => {
    const eventURL = router.query.slug;
    if (!eventURL) return;
    const {
      data: {event, participants},
    } = await axios.get(`http://localhost:2222/event/${eventURL}`);
    setEventData(event);
    setEventParticipants(participants);
  };

  return (
    <Layout>
      <PageTopSide bgImage="./../assets/images/homeBg.jpg" defaultHeight="300" title={eventData.title} desc={eventData.subtitle} />

      <EventDetailArea>
        <Container>
          <Row>
            <Col xs={{order: 2, span: 12}} md={{order: 1, span: 8}}>
              <CustomCard>
                <CustomCard.Body>
                  <img className="mb-3" src={eventData.imagePath} />
                  <span className="subTitle ">Detaylar</span>
                  <p>{eventData.description}</p>
                </CustomCard.Body>
              </CustomCard>
            </Col>
            <Col
              xs={{order: 1, span: 12}}
              md={{order: 2, span: 4}}
              className="mb-3 "
            >
              <CustomCard>
                <CustomCard.Body className="rightContent">
                  <div className="topSide">
                    <h3 className="subTitle">Düzenleyen</h3>
                    <span className="title">{eventData.organizer}</span>
                  </div>
                  <div className="mb-3">
                    <FontAwesomeIcon icon={faClock} />
                    <span className="clock">
                      {eventData.date} - {eventData.time}
                    </span>
                  </div>
                  <div className="mb-3">
                    <FontAwesomeIcon icon={faUsers} />
                    <div className="participants">
                      <ul>
                        {eventData &&
                          eventData.guests.map((guest, index) => (
                            <li key={index}>{guest}</li>
                          ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mb-3">
                    <FontAwesomeIcon icon={faHeadphones} />
                    <span className="clock">{eventData.moderator} </span>
                  </div>
                  {eventData.isOnline && (
                    <div className="mb-3">
                      <FontAwesomeIcon icon={faVideo} />
                      <span className="clock">Online Etkinlik</span>
                    </div>
                  )}
                </CustomCard.Body>
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
                    <Link href="">
                      <a className="seeAll">Tümünü Gör</a>
                    </Link>
                  </Col>
                </Row>
                <div className="testimonial-group">
                  <Row className="mt-4">
                    {eventParticipants &&
                      eventParticipants.map((participant, index) => {
                        return (
                          <Col key={index} xs={6} sm={4} lg={3}>
                            <CustomCard>
                              <CustomCard.Body>
                                {/* GONNA DYNAMIC IMAGE URL */}
                                <img src="/assets/images/berkaydogukan.jpg" />
                                <span>{participant.name}</span>
                              </CustomCard.Body>
                            </CustomCard>
                          </Col>
                        );
                      })}
                  </Row>
                </div>
              </ParticipantsArea>
            </Col>
          </Row>
        </Container>
        <AttendArea>
          <Container>
            <Row>
              <Col xs={8} sm={8} className="d-none d-sm-block">
                <span className="clock attendClock">
                  {eventData.date} - {eventData.time}
                </span>
                <span className="clock">{eventData.subtitle}</span>
              </Col>
              <Col
                xs={12}
                sm={4}
                className="d-block d-sm-flex align-items-sm-center justify-content-sm-end"
              >
                <div>
                  <FilterButton className="btn d-block">Katıl</FilterButton>
                </div>
              </Col>
            </Row>
          </Container>
        </AttendArea>
      </EventDetailArea>
    </Layout>
  );
}
