import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Link from 'next/link';

const CustomFooter = styled.footer`
  background: #f5f5f5;
  .container {
    border-top: 1px solid #f1f1f1;
    padding: 80px 15px;
  }

  .logo {
    width: 200px;
    opacity: 0.5;
    transition: all 0.3s ease;
  }
  .logo:hover {
    opacity: 1;
    transition: all 0.3s ease;
  }
  .social-links {
    margin-top: 10px;
  }
  .social-links a {
    font-size: 16pt;
    padding: 10px;
    color: #868686;
    opacity: 0.5;
    transition: all 0.3s ease;
  }
  .social-links a:hover {
    opacity: 1;
    transition: all 0.3s ease;
  }
  .copyright {
    display: block;
    margin-top: 15px;
    opacity: 0.5;
    color: #868686;
  }
  .footerTitle {
    font-size: 13pt;
    font-weight: 500;
    color: #86888a;
  }
  .footerLinks ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .footerLinks a {
    display: block;
    font-weight: 400;
    font-size: 11pt;
    color: #253a4a;
    opacity: 0.8;
    padding: 5px 0;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  .footerLinks a:hover {
    opacity: 1;
    transition: all 0.3s ease;
  }
`;
export default function Footer() {
  return (
    <CustomFooter>
      <Container>
        <Row>
          <Col xs={12} md={4} className="text-center text-md-left">
            <Row>
              <Col xs={12}>
                <Link href="/">
                  <a>
                    <img className="logo" src="/assets/images/logo-blue.png" />{' '}
                  </a>
                </Link>
                <span className="copyright">
                  © 2020 İstanbul Bilişim Topluluğu
                </span>
              </Col>
              <Col xs={12}>
                <div className="social-links">

                  <a href="https://www.facebook.com/bilisimtopluluguist">
                    <i aria-hidden className="fab fa-facebook instagramIcon"></i>
                  </a>

                  <a href="https://twitter.com/bilisimtopluluk">
                    <i aria-hidden className="fab fa-twitter instagramIcon"></i>

                  </a>

                  <a href="https://www.instagram.com/bilisimtoplulukist/">
                    <i aria-hidden className="fab fa-instagram instagramIcon"></i>
                  </a>
                  <a href="https://www.youtube.com/channel/UCV65xnHpBkf7cfo9R7oYYWA?app=desktop">
                    <i aria-hidden className="fab fa-youtube instagramIcon"></i>
                  </a>


                  <a href="https://www.linkedin.com/company/bilisimtopluluguist/">
                    <i aria-hidden className="fab fa-linkedin instagramIcon"></i>
                  </a>

                  <a href="https://github.com/bilisimtoplulugu">
                    <i aria-hidden className="fab fa-github instagramIcon"></i>
                  </a>

                  <a href="https://www.meetup.com/bilisimtoplulugu">
                    <i aria-hidden className="fab fa-meetup instagramIcon"></i>
                  </a>
                  <a href="https://kommunity.com/bilisimtoplulugu">
                    <i aria-hidden className="fab fa-korvue instagramIcon"></i>
                  </a>

                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={8} className="footerLinks d-none d-sm-block">
            <Row>
              <Col xs={6} md={4}>
                <h6 className="footerTitle mt-5 mt-md-0 ">Hakkımızda</h6>
                <ul>
                  <li>
                    <Link href="/etkinlikler" passHref={true}>
                      <a>Etkinlikler</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/sponsorlar">
                      <a>Sponsorlar</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <a>Blog</a>
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col xs={6} md={4}>
                <h6 className="footerTitle mt-5 mt-md-0 ">Etkinlikler</h6>
                <ul>
                  <li>
                    <Link href="/">
                      <a>Kariyer Sohbetleri</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Workshop Çalışmaları</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Online Seminerler</a>
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col xs={6} md={4}>
                <h6 className="footerTitle mt-5 mt-md-0 ">İletişim</h6>
                <ul>
                  <li>
                    <Link href="/">
                      <a>S.S.S.</a>
                    </Link>
                  </li>
                  <li>
                    <a href="mailto:info@bilisimtoplulugu.org">
                      info@bilisimtoplulugu.org
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </CustomFooter>
  );
}
