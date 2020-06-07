import React from 'react';
import {Row, Col, ButtonGroup, Button} from 'react-bootstrap';
import OrganizationEventCard from './OrganizationEventCard';
import Link from 'next/link';
import styled from 'styled-components';

const MainArea = styled.div`
  a {
    color: #253a4a;
  }

  .holder {
    position: relative;
  }
  .inner {
    height: 0;
    border-radius: 5px;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    padding: 0 10px;
    right: 0;
    background: rgba(37, 59, 75, 0.3);
    backdrop-filter: blur(5px);
    color: white;
    display: flex;
    opacity: 0;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }
  .inner a {
    background: white;
    margin: 0 5px;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0 0px 20px rgba(169, 169, 169, 0.2);
    text-decoration: none;
    transition: all 0.3s ease;
  }
  .inner a:hover {
    transform: scale(1.03);
    transition: all 0.3s ease;
  }
  .holder:hover .inner {
    transition: all 0.3s ease;
    opacity: 1;
    height: 100%;
  }
`;

const CustomButton = styled.a`
  font-size: 11pt;
  color: #fff !important;
  border-radius: 5px;
  padding-left: 20px;
  padding-right: 20px;

  background: #0097e4;
  border: none;
  margin-left: 5px;

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

export default function OrganizationEvents() {
  return (
    <MainArea>
      <Row>
        <Col xs={12} className="text-right">
          <Link href="/topluluk/etkinlik-olustur">
            <CustomButton className="btn">Yeni Etkinlik</CustomButton>
          </Link>
        </Col>
        <Col xs={12}>
          <div className="holder">
            <a className="text-decoration-none">
              {' '}
              <OrganizationEventCard
                title="Career Talks #5"
                content="Herkese merhaba!
İstanbul Bilişim Topluluğu olarak “Career Talks” serimize hız kesmeden devam ediyoruz.Bu
hafta bize optiWisdom ‘un kurucusu Doç.Dr. Şadi Evren Şeker eşlik ediyor."
                img="imagesadi"
              />
            </a>

            <div className="inner">
              <Link href="">
                <a>Görüntüle</a>
              </Link>
              <Link href="">
                <a>Düzenle</a>
              </Link>
            </div>
          </div>
        </Col>
        <Col xs={12}>
          <div className="holder">
            <a className="text-decoration-none">
              {' '}
              <OrganizationEventCard
                title="Career Talks #5"
                content="Herkese merhaba!
İstanbul Bilişim Topluluğu olarak “Career Talks” serimize hız kesmeden devam ediyoruz.Bu
hafta bize optiWisdom ‘un kurucusu Doç.Dr. Şadi Evren Şeker eşlik ediyor."
                img="imagesadi"
              />
            </a>

            <div className="inner">
              <Link href="">
                <a>Görüntüle</a>
              </Link>
              <Link href="">
                <a>Düzenle</a>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </MainArea>
  );
}
