import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import Head from 'next/head'
import styled from 'styled-components'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import EventDateSlider from '../../components/EventDateSlider'
import HomeEventCard from '../../components/HomeEventCard'
import AOS from 'aos';
import PageTopSide from '../../components/PageTopSide'

const EventTop = styled.div`
background-image:url(${"./../assets/images/homeBg.jpg"});
height:250px;
color: #fff;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position:relative;
    &::before{
        content: "";
        background: rgba(13, 42, 62, 0.8);
        backdrop-filter:blur(3px);
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
    }
`
const EventTopInner = styled.div`
position: absolute;
    top: 50%;
left:0;
right:0;

`;

const FilterButton = styled.a`

font-size: 11pt;
color: #fff !important;
border-radius: 5px;
padding-left:  20px;
padding-right:  20px;
opacity: .5;
background:#0097e4;
border:none;
margin-left: 5px;

transition: all .3s ease;
&:hover {
    background:#019eef;
    border-color:#019eef;

    transition: all .3s ease;
}
&:hover{
    opacity:1;
}
@media(max-width:991px){
    margin: 10px 0;
}
box-shadow: 0 3px 20px rgba(169,169,169,0.5);

`;

const Filters = styled.div`
text-align:right;
margin-top:30px;
.active-button{
    opacity:1;
}
`;
export default function Event() {

    useEffect(() => {
        AOS.init();


    })

    return (

        <Layout>
           <PageTopSide title="Etkinlikler" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
           
            <Container>
                <Row>
                    <Col xs={12}>

                        <Filters >
                            <div>
                                <FilterButton className="btn ">Geçmiş Etkinlikleri Görüntüle</FilterButton>
                            </div>
                        </Filters>

                        <EventDateSlider />
                    </Col>

                    <Col xs={12}>

                        <HomeEventCard />
                    </Col>
                </Row>
            </Container>

        </Layout>

    )

}
