import React from 'react'
import Layout from '../../../../components/Layout'
import PageTopSide from '../../../../components/PageTopSide'
import styled from 'styled-components'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft, faArrowDown, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const MainArea = styled.div`
margin-bottom:50px;
.tabsArea{
    display: flex;
    justify-content: center;
    margin-top: -20px;
}
img{
    width:72px;
    border-radius:50%;
}
color:rgb(37, 59, 75);
.participantCard span{
    font-weight:500;
    font-size:13pt;
    display:block
}
.date{
    opacity:.5;
    font-weight:400 !important;
}
.participantCard{
    border-bottom:1px solid #f1f1f1;
    padding:20px 0;
}

.form-group input{
    border: 1px solid #f1f1f1;
    font-size: 15pt;
    height: 55px;
    box-shadow: 0 0px 20px rgba(224, 224, 224, 0.4);
}
.backText{
    display:unset;
    padding-left:15px;
}
.backArea{
    font-size: 20pt;

}
`;

const CustomButton = styled(Button)`
font-size: 14pt;
font-weight: 400;
  color: #fff !important;
  border-radius: 5px;
  padding-left: 20px;
  padding-right: 20px;

  background: #0097e4;
  border: none;
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



export default function Participants() {
    return (
        <Layout>
            <PageTopSide responsiveTop="40" responsiveHeight="250" bgImage="./../../assets/images/homeBg.jpg" defaultHeight="250" title="Katılımcılar" desc="Career Talks #5" />

            <MainArea>
                <Container>

                    <Row className="tabsArea">
                        <Col xs={12} lg={8} >
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col xs={12} className="backArea">
                                            <CustomButton>
                                                <FontAwesomeIcon icon={faArrowLeft} />
                                                <span className="backText">Etkinliğe Geri Dön</span>
                                            </CustomButton>
                                        </Col>
                                        <Col xs={12}>
                                            <Form className="mt-4 ">
                                                <Form.Group controlId="formBasicEmail">

                                                    <Form.Control type="email" placeholder="Katılımcı ara." />
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                        <Col xs={12} >
                                            <div className="participantCard">
                                                <Row className="align-items-center text-center text-sm-left">
                                                    <Col xs={12} sm={3} md={2}>
                                                        <img src="/assets/images/berkaydogukan.jpg" />
                                                    </Col>
                                                    <Col xs={12} sm={9} md={10} className="mt-3 mt-sm-0">
                                                        <span className="name">Berkay Doğukan Urhan</span>
                                                        <span className="date">28 Mart 2020, Pazartesi</span>

                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                        <Col xs={12} >
                                            <div className="participantCard">
                                                <Row className="align-items-center text-center text-sm-left">
                                                    <Col xs={12} sm={3} md={2}>
                                                        <img src="/assets/images/berkaydogukan.jpg" />
                                                    </Col>
                                                    <Col xs={12} sm={9} md={10} className="mt-3 mt-sm-0">
                                                        <span className="name">Berkay Doğukan Urhan</span>
                                                        <span className="date">28 Mart 2020, Pazartesi</span>

                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                       
                                       
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>


                </Container>
            </MainArea>
        </Layout>
    )
}
