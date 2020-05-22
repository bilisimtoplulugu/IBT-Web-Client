import React from 'react'
import Link from 'next/link'
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

const CustomCard = styled(Card)`
margin-bottom:15px;
  box-shadow: 0 0px 20px rgba(169, 169, 169, 0.2);
  border: none;
  color: #253a4a;
  transition: all .3s ease;
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
  .eventProvider{
    border-top: 1px solid #f5f5f5;
    padding: 10px 0;
    margin-top: 5px;
  }
  .eventProvider .providerName{
    font-weight: 500;
    opacity: .5;
    color: #253b4b;
  }

  .participant{
    font-weight: 500;
    opacity: .5;
    color: #253b4b;
  }

  &:hover{
    transition: all .3s ease;
    transform: scale(1.02);
  }
`;

export default function EventPageCard() {
    return (
        <Link href="/about" as="/hakkimizda">
              <a className="text-decoration-none">
                <CustomCard>
                  <CustomCard.Body>

                    <Row>
                      <Col xs={12} md={4}>
                        <img src="/assets/images/image1.png" />
                      </Col>
                      <Col xs={12} md={8}>
                        <Row>
                          {/* TODO:768 PX PROBLEM */}
                          <Col xs={12} sm={12}>
                            <span className="clock">
                            11 Mayıs Pazartesi, 13.30
                            </span>
                          </Col>
                          <Col xs={12} sm={12}>
                            <span className="title">Career Talks #5 | Girişimcilik</span>
                            <span className="cardSubTitle">Online Etkinlik</span>
                          </Col>
                         
                        </Row>
                        </Col>
                        <Col xs={12}>
                        <p>"Girişimcilik ve Globalleşme", "Covid-19 Girişimciliğe Etkileri ve Geleceği" ve "Girişimcilik ve Yatırım Süreçleri"nden bahsedeceği online etkinliğimize hepinizi bekliyoruz!
                        "Girişimcilik ve Globalleşme", "Covid-19 Girişimciliğe Etkileri ve Geleceği" ve "Girişimcilik ve Yatırım Süreçleri"nden bahsedeceği online etkinliğimize hepinizi bekliyoruz!

                        </p>
                        </Col>
                        <Col xs={12} >
                           <div className="eventProvider">
                               <Row>
                                   <Col xs={12} sm={6}>
                                   <span className="participant">35 Katılımcı</span>
                              
                                   </Col>
                                   <Col xs={12} sm={6}>
                                   <span className="providerName text-left text-sm-right">İstanbul Bilişim Topluluğu</span>
                                   </Col>
                               </Row>
                           </div>
                        </Col>
                    </Row>

                  </CustomCard.Body>
                </CustomCard>
              </a>
            </Link>
    )
}
