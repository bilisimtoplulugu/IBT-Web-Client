import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import styled from 'styled-components';
import Link from 'next/link';


const CustomCard = styled(Card)`
box-shadow: 0 0px 20px rgba(169, 169, 169, 0.20);
border:none;
color:#253a4a;
img{
    width:100%;
    border-radius:5px;
}
.title{
    font-size: 20pt;
    font-weight: 400;

}
    .cardSubTitle{
    font-weight:400;
    opacity:.6;
}
span{
    display:block;
}
.clock{
    font-size: 20pt;
    font-weight: 400;
    opacity: .5;
    text-align:right;
}
p{
    margin-top: 15px;
}
.detailText{
    position: absolute;
    right: 15px;
    bottom: 0;
    opacity:.5;
}
`;


export default function HomeEventCard() {
    return (
        <Link href="/about" as="/hakkimizda">
        <a className="text-decoration-none">

        <CustomCard>
            <CustomCard.Body>
                <Row>
                    <Col xs={12} md={4} >
                        <img src="/assets/images/image1.png" />
                    </Col>
                    <Col xs={12} md={8}>            
                            <Row>
                                {/* TODO:768 PX PROBLEM */}
                                <Col xs={12} sm={9} >
                                <span className="title">Cem Ekinci - KolayBi </span>
                                </Col>
                                <Col xs={12}  sm={3}>
                                <span className="text-left text-sm-right clock">16:00</span>
                                </Col>
                            </Row>
                            <span className="cardSubTitle">Career Talks #5 | Girişimcilik</span>
                            <p >
                            "Girişimcilik ve Globalleşme", "Covid-19 Girişimciliğe Etkileri ve Geleceği" ve "Girişimcilik ve Yatırım Süreçleri"nden bahsedeceği online etkinliğimize hepinizi bekliyoruz!
                            </p>
                       

                            
                    </Col>
                </Row>

            </CustomCard.Body>
        </CustomCard>

        </a>
        </Link>
    )
}
