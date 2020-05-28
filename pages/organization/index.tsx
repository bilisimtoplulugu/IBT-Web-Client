import React from 'react'
import Layout from '../../components/Layout'
import PageTopSide from '../../components/PageTopSide'
import styled from 'styled-components';
import { Button, Card, Row, Col, Form, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const MainArea = styled.div`

margin:30px 0;

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
.orgImage{
    position:relative;
    margin:0 auto;
    height: 120px;
    width:120px;
}

.orgImage:hover .selectImage{
    opacity:1;
    transition:all .3s ease;
    cursor:pointer;
}

.selectImage{
    transition:all .3s ease;
 
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    bottom: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.3);
    color: white;
    opacity: 1;
    border-radius: 50%;
}
textarea {
    resize: none;
    height:100px;
 }

`;

const CustomButton = styled(Button)`
  font-size: 11pt;
  color: #fff !important;
  border-radius: 5px;
  padding-left: 20px;
  padding-right: 20px;
 width:100%;
 justify-content:center;
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
            <PageTopSide
                responsiveTop="50"
                responsiveHeight="200"
                bgImage="./../assets/images/homeBg.jpg"
                defaultHeight="250"
                title="Topluluk Oluştur"
                desc="Topluluğun ile birlikte gerçekleştirdiğin etkinliklerden haberdar olunması için topluluk profili oluşturabilirsin."
            />


            <MainArea>
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col xs={4}>
                            <CustomCard>
                                <CustomCard.Body>

                                    <Form>
                                        <Form.Group>
                                            <div className="orgImage">
                                                <img src="" />
                                                <div className="selectImage">
                                                    <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                                                </div>
                                            </div>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Topluluk Adı</Form.Label>
                                            <Form.Control type="email" className="shadow-none" placeholder="E-Posta" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Topluluk Hakkında</Form.Label>
                                            <Form.Control as="textarea" className="shadow-none"  />
                                        </Form.Group>
                                        <Form.Group>
                                        <CustomButton classname="btn" type="submit">
                                                                Oluştur
                                                            </CustomButton>
                                        </Form.Group>
                                    </Form>


                                </CustomCard.Body>
                            </CustomCard>
                        </Col>
                    </Row>
                </Container>
            </MainArea>
        </Layout>
    )
}
