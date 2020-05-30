import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Card, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Link from 'next/link';
import axios from 'axios';
import CustomCard from './CustomCard'

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
export default function HomeEventCard() {
  const selectedEvent = useSelector((state) => state.eventReducer);
  const [selectedEventDetail, setSelectedEventDetail] = useState('');

  useEffect(() => {
    getSelectedEventData();
  }, [selectedEvent]);

  const getSelectedEventData = async () => {
    const { data } = await axios.get(`http://localhost:2222/event/e/${selectedEvent}`);
    setSelectedEventDetail(data);
  };

  return (
    <div data-aos="fade-right">
      <MainArea>
        {selectedEventDetail && (
          <Link href="/about" as="/hakkimizda">
            <a className="text-decoration-none">
              <CustomCard>

                <Row>
                  <Col xs={12} md={4}>
                    <img src={selectedEventDetail.imagePath} />
                  </Col>
                  <Col xs={12} md={8}>
                    <Row>
                      {/* TODO:768 PX PROBLEM */}
                      <Col xs={12} sm={9}>
                        <span className="title">{selectedEventDetail.title} </span>
                      </Col>
                      <Col xs={12} sm={3}>
                        <span className="text-left text-sm-right clock">
                          {selectedEventDetail.time}
                        </span>
                      </Col>
                    </Row>
                    <span className="cardSubTitle">{selectedEventDetail.subtitle}</span>
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
