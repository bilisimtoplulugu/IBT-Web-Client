import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import Head from 'next/head'
import styled from 'styled-components'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import EventDateSlider from '../../components/EventDateSlider'
import HomeEventCard from '../../components/HomeEventCard'
import AOS from 'aos';
import PageTopSide from '../../components/PageTopSide'
import EventPageCard from '../../components/EventPageCard'


const FilterButton = styled.a`

font-size: 11pt;
color: #fff !important;
padding-left:  20px;
padding-right:  20px;
opacity: .5;
background:#0097e4;
width: 100%;
border-radius: 0;

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


`;

const Filters = styled.div`
box-shadow: 0 3px 20px rgba(169,169,169,0.5);
border-radius:5px;
overflow:hidden;
.active-button{
    opacity:1;
}
`;

const MainArea = styled.div`
margin:50px 0;
`;

export default function Event() {

    useEffect(() => {
        AOS.init();


    })

    return (

        <Layout>
           <PageTopSide title="Etkinlikler" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
           
           <MainArea>
           <Container>
                <Row>
                    <Col xs={3}>

                        <Filters >
                
                                <FilterButton className="btn active-button">Yaklaşan Etkinlikler</FilterButton>
                                <FilterButton className="btn ">Geçmiş Etkinlikler</FilterButton>   
                        </Filters>

                    </Col>

                    <Col xs={9}>

                        <EventPageCard />
                        <EventPageCard />
                        <EventPageCard />
                    </Col>
                </Row>
            </Container>
           </MainArea>

        </Layout>

    )

}
