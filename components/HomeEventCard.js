import React, {useState, useEffect} from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';
import Link from 'next/link';
import CustomCard from './CustomCard';
import {useSelector} from 'react-redux';
import {isArray} from 'util';
import { API_URL } from '../config';

const MainArea = styled.div`
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
  span {
    display: block;
  }
  .clock {
    font-size: 20pt;
    font-weight: 400;
    opacity: 0.5;
    text-align: right;
  }
  p {
    margin-top: 15px;
  }
  .detailText {
    position: absolute;
    right: 15px;
    bottom: 0;
    opacity: 0.5;
  }
`;
export default function HomeEventCard({selectedEventId}) {
  const [selectedEventDetail, setSelectedEventDetail] = useState('');
  const nearEvents = useSelector((state) => state.eventReducer);

  useEffect(() => {
    //if (Array.isArray(nearEvents)) console.log('o bir array:' + nearEvents);
    const selectedEvent = nearEvents.find(
      (event) => event._id == selectedEventId
    );
    setSelectedEventDetail(selectedEvent);
  }, [nearEvents, selectedEventId]);

  return (
    <div data-aos="fade-right">
      <MainArea>
        {selectedEventDetail && (
          <Link
            href={`/etkinlikler/${selectedEventDetail.seoUrl}`}
            /* as={`/etkinlikler/${selectedEventDetail.seoUrl}`} */ // this as not working even i add passhref true attribute
          >
            <a className="text-decoration-none">
              <CustomCard>
                <Row>
                  <Col xs={12} md={4}>
                    <img
                      src={`${API_URL}/images/event/${selectedEventDetail.seoUrl}.png`}
                    />
                  </Col>
                  <Col xs={12} md={8}>
                    <Row>
                      {/* TODO:768 PX PROBLEM */}
                      <Col xs={12} sm={9}>
                        <span className="title">
                          {selectedEventDetail.title}{' '}
                        </span>
                      </Col>
                      <Col xs={12} sm={3}>
                        <span className="text-left text-sm-right clock">
                          {selectedEventDetail.time}
                        </span>
                      </Col>
                    </Row>
                    <span className="cardSubTitle">
                      {selectedEventDetail.subtitle}
                    </span>
                    <p>{selectedEventDetail.description}</p>
                  </Col>
                </Row>
              </CustomCard>
            </a>
          </Link>
        )}
      </MainArea>
    </div>
  );
}
