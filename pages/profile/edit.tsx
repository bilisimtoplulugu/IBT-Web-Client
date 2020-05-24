import React from 'react'
import Layout from '../../components/Layout'
import PageTopSide from '../../components/PageTopSide'
import { Container, Row, Col, Card, Form, Tab, Nav, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'


const MainArea = styled.div`

margin:50px 0;


`;




const CustomCard = styled(Card)`
box-shadow: 0 0px 20px rgba(169, 169, 169, 0.2);
border: none;
color: #253a4a;
transition: all .3s ease;

span{
    display:block;
    font-weight:400;
}
.userMail{
    font-size: 15pt;
    opacity: .5;
}
.userName{
    font-size:20pt;
}
img{
    width: 100%;
    
}
.userImage{
    margin:0 auto;
    position:relative;
    overflow: hidden;
    border-radius: 50%;
    height: 120px;
    width:120px;

}



`;

const CustomButton = styled(Button)`
  font-size: 11pt;
  color: #fff !important;
  border-radius: 5px;
  padding-left: 20px;
  padding-right: 20px;

  background: #0097e4;
  border: none;
  margin-left: 5px;
  display: flex;
  align-items: center;
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


export default function index() {
    return (
        <Layout>
            <PageTopSide responsiveTop="50" responsiveHeight="200" bgImage="./../assets/images/homeBg.jpg" defaultHeight="250" title="Düzenle" desc="" />

            <MainArea>
                <Container>
                    <Row>

                        <Col xs={12} >
                            <CustomCard>
                                <CustomCard.Body>
                                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                        <Row>
                                            <Col md={3}>
                                                <Nav variant="pills" className="flex-column">
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="first">Kişisel bilgilerim</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="second">Parola Ayarları</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </Col>
                                            <Col md={9}>
                                                <Tab.Content>
                                                    <Tab.Pane eventKey="first">
                                                    <Form>
                                                        <Row>
                                                       
                                                          
                                                            <Col xs={12} md={3}  className="mb-5 mt-5 mt-md-0 mb-md-0">
                                                                <div className="userImage">
                                                                    <img src="/assets/images/berkaydogukan.jpg" />
                                                                </div>
                                                            </Col>
                                                            <Col xs={12} md={9} >
                                                               
                                                             <Row>
                                                                 <Col xs={12} md={6}>
                                                                 <Form.Group controlId="formBasicEmail">
                                                                   <Form.Label>Adınız</Form.Label>
                                                                   <Form.Control type="text" placeholder="Adınız" />
                                                               </Form.Group>

                                                              
                                                                 </Col>
                                                                 <Col xs={12} md={6}>
                                                                 <Form.Group controlId="formBasicPassword">
                                                                   <Form.Label>Soyadınız</Form.Label>
                                                                   <Form.Control type="text" placeholder="Soyadınız" />
                                                               </Form.Group>
                                                               </Col>
                                                               <Col xs={12} md={6}>
                                                               <Form.Group controlId="formBasicPassword">
                                                                   <Form.Label>E-Posta</Form.Label>
                                                                   <Form.Control type="email" placeholder="E-Posta" />
                                                               </Form.Group> 
                                                               </Col>
                                                             </Row>

                                                       
                                                       </Col>
                                                            <Col xs={12} className="d-flex justify-content-end">
                                                            <CustomButton type="submit">
                                                                Kaydet
                                                            </CustomButton>
                                                            </Col>
                                                         
                                                        </Row>
                                                        </Form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="second">
                                                        asfd
                                            </Tab.Pane>
                                                </Tab.Content>
                                            </Col>
                                        </Row>
                                    </Tab.Container>
                                </CustomCard.Body>
                            </CustomCard>
                        </Col>
                    </Row>
                </Container>
            </MainArea>
        </Layout >
    )
}
