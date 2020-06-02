import React, {useEffect} from 'react';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';
import CustomCard from './CustomCard';
import isoToNormal from '../utils/isoToNormal';
import {API_URL} from '../config';

const MainArea = styled.div`
  transition: all 0.3s ease;
  margin-bottom: 20px;
  img {
    width: 100%;
    border-radius: 5px;
  }
  .title {
    font-size: 20pt;
    font-weight: 400;
  }
  .cardSubTitle {
    font-weight: 400;
    opacity: 0.6;
  }

  .clock {
    font-size: 15pt;
    font-weight: 400;
    opacity: 0.5;
  }
  p {
    margin-top: 15px;
    width: 100%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    background: #fff;
  }
  .detailText {
    position: absolute;
    right: 15px;
    bottom: 0;
    opacity: 0.5;
  }
  .eventProvider {
    border-top: 1px solid #f5f5f5;
    padding: 10px 0;
    margin-top: 5px;
  }
  .eventProvider .providerName {
    font-weight: 500;
    opacity: 0.5;
    color: #253b4b;
  }

  .participant {
    font-weight: 500;
    opacity: 0.5;
    color: #253b4b;
  }

  &:hover {
    transition: all 0.3s ease;
    transform: scale(1.02);
  }
`;

export default function EventPageCard({event}) {
  return (
    <MainArea>
      <Link href={`/etkinlikler/[slug]`} as={`/etkinlikler/${event.seoUrl}`} passHref={true}>
        <a className="text-decoration-none">
          <CustomCard>
            <Row>
              <Col xs={12} md={4}>
                <img src={`${API_URL}/images/event/${event.seoUrl}.png`} />
              </Col>
              <Col xs={12} md={8}>
                <Row>
                  {/* TODO:768 PX PROBLEM */}
                  <Col xs={12} sm={12}>
                    <span className="clock">{isoToNormal(event.date)}</span>
                  </Col>
                  <Col xs={12} sm={12}>
                    <span className="title">{event.title}</span>
                    {event.isOnline && (
                      <span className="cardSubTitle">Online Etkinlik</span>
                    )}
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <p>{event.description}</p>
              </Col>
              <Col xs={12}>
                <div className="eventProvider">
                  <Row>
                    <Col xs={12} sm={6}>
                      <span className="participant">
                        {event.participants.length} Katılımcı
                      </span>
                    </Col>
                    <Col xs={12} sm={6}>
                      <span className="providerName text-left text-sm-right">
                        {event.organizer}
                      </span>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </CustomCard>
        </a>
      </Link>
    </MainArea>
  );
}
