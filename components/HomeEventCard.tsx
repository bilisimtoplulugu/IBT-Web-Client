import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Card, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';
import Link from 'next/link';
import data from '../data';

const CustomCard = styled(Card)`
  box-shadow: 0 0px 20px rgba(169, 169, 169, 0.2);
  border: none;
  color: #253a4a;
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

export default function HomeEventCard() {
  const selectedEvent = useSelector((state) => state.eventReducer);

  return (
    <Link href="/about" as="/hakkimizda">
      <a className="text-decoration-none">
        <CustomCard>
          <CustomCard.Body>
            {data.map((event) => {
              if (event.id === selectedEvent) {
                return (
                  <Row>
                    <Col xs={12} md={4}>
                      <img src={event.img} />
                    </Col>
                    <Col xs={12} md={8}>
                      <Row>
                        {/* TODO:768 PX PROBLEM */}
                        <Col xs={12} sm={9}>
                          <span className="title">{event.title} </span>
                        </Col>
                        <Col xs={12} sm={3}>
                          <span className="text-left text-sm-right clock">
                            {event.time}
                          </span>
                        </Col>
                      </Row>
                      <span className="cardSubTitle">{event.subtitle}</span>
                      <p>{event.description}</p>
                    </Col>
                  </Row>
                );
              }
            })}
          </CustomCard.Body>
        </CustomCard>
      </a>
    </Link>
  );
}
