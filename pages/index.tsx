import React, { useEffect, useState, useRef } from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import styled, { keyframes } from 'styled-components'
import WelcomeSlider from '../components/WelcomeSlider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import Layout from '../components/Layout';
import Head from 'next/head';
import WelcomeInner from '../components/WelcomeInner'
import Link from 'next/link'

import AOS from 'aos';
import EventDateSlider from '../components/EventDateSlider'
import AboutArea from '../components/AboutArea'
import HomeEventCard from '../components/HomeEventCard'
import HomeEventDetailCard from '../components/HomeEventDetailCard'



const InstagramProfile = styled.div`
background:#E1306C;
padding:15px 0;

color:white;

.instagramIcon{
    font-size: 23pt;
    opacity: .3;
    margin-right: 10px;
}

.message{
    font-weight: 400;
    display: inline-flex;
    line-height: 33px;
    font-size: 12pt;
    padding: 5px 0;
    margin-right: 30px;
}
text-align: center;

a{
    background: #ca0a4a;
    border-color: #ca0a4a;
    opacity: .5;
    transition: all .3s ease;
    color:white;
}
a:hover{
    transition: all .3s ease;
    opacity:1 !important;
    color:white;
}

@media(max-width: 1024px){
    .message{
        line-height: 23px;
        font-size: 12pt;
        margin-right: unset;
        margin-bottom: 10px;
    }
    a{
        display: block;
        text-align: center;
        margin-left: unset;
    }
    }


`;

const InstagramInner = styled.div`
display:inline-flex;

@media only screen and (max-width: 1024px){

    display: block;
    text-align: left;
}
`



const EventArea = styled.div`
padding:40px 0;
.topSide{
    margin-bottom: 20px;
}
h2{
    font-weight: 700;
    margin-bottom: 0 !important;

    color: #253a4a;
}
.subTitle{
    font-size: 20pt;
    font-weight: 500;
    opacity: .5;
}
.contentSide{
    margin-top:20px;
}
`;

const EventInfo = styled.div`

h3{
    padding: 10px;
    background: #0097e4;
    color: white;
    font-weight: 500;
    font-size: 16pt;
    display:block;
    opacity:.8;
    margin-bottom: 23px;
    border-radius:5px;
    width: 70%;
    transition: all .3s ease;
}
h3.active{
    opacity:1;
    transform: scale(1.04) translateX(15px);
    box-shadow: 0 3px 20px rgba(169,169,169,0.75);
}
h3:hover{
    opacity:1;
    transform: scale(1.04) translateX(15px);
    transition: all .3s ease;
    box-shadow: 0 3px 20px rgba(169,169,169,0.75);
}

`;
export default function Home() {



    useEffect(() => {
        AOS.init();


    })

    return (
        <Layout>
            <Head>
                <title>My page title</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            </Head>


            <WelcomeInner />
            <InstagramProfile>
                <Container>
                    <InstagramInner>

                        <span className="message"><FontAwesomeIcon className="instagramIcon" icon={faInstagram} />Etkinliklerden ve duyurulardan haberdar olmak için bizi İnstagram'da takip Edin!</span>
                        <Link href="">
                            <a className="btn">Takip Et</a>
                        </Link>

                    </InstagramInner>

                </Container>
            </InstagramProfile>

            <EventArea>
                <Container>
                    <div className="topSide" data-aos="fade-right">
                        <h2>Yakındaki Etkinliklerimiz</h2>
                        <span className="subTitle">Nelerdir?</span>
                    </div>
                    <Row>
                        <Col xs={12}>
                            <EventDateSlider />
                        </Col>

                        <Col xs={12}>

                            <HomeEventCard />

                        </Col>
                    </Row>
                </Container>

            </EventArea>

            <AboutArea />


            <EventArea>
               <Container>
               <div className="topSide" data-aos="fade-right">
                    <h2>Etkinliklerimiz</h2>
                    <span className="subTitle">Nelerdir?</span>
                </div>

                <Row>

                    <Col xs={6}>
                    <div className="contentSide" >
                    <EventInfo data-aos="fade-right">
                        <h3 className="active">Kariyer Sohbetleri</h3>
                    </EventInfo>
                    <EventInfo data-aos="fade-right">
                        <h3>Workshop Çalışmaları</h3>
                    </EventInfo >
                    <EventInfo data-aos="fade-right">
                        <h3>Online Seminerler</h3>
                    </EventInfo>
                    <EventInfo data-aos="fade-right">
                        <h3>Career Talks</h3>
                    </EventInfo>
                   
                    </div>
                    </Col>
                    <Col xs={6}>
                    <HomeEventDetailCard  />
                    </Col>
                </Row>
               </Container>
            </EventArea>


        </Layout>
    )
}
