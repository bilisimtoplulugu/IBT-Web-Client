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
    background: #e6145b;
    border-color: #e6145b;
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
padding:80px 0;
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
                        <h2>Etkinliklerimiz</h2>
                        <span className="subTitle">Nelerdir?</span>
                    </div>
                         <Row>
                            <Col xs={12}>
                                <EventDateSlider  />
                            </Col>

                            <Col xs={12}>

                           <HomeEventCard />

                            </Col>
                         </Row>
                  </Container>

            </EventArea>

            <AboutArea />
        
     
        </Layout>
    )
}
