import React from 'react'
import Layout from '../../components/Layout'
import PageTopSide from '../../components/PageTopSide'
import styled from 'styled-components'
import { Container, Row, Col, Tabs, Tab, Form, Button } from 'react-bootstrap';


const LoginArea = styled.div`

padding:50px 0;

.tabsArea{
    display: flex;
    justify-content: center
}
.tabsArea .nav-tabs a{
    color:rgb(37, 59, 75);
    font-weight:400;
    width:50%;
    border-radius:0;
}
.tabsArea .nav-tabs a:hover{
    border-color:transparent;
}
.tabsArea .nav-tabs a:focus{
    outline:none;
}
.tabsArea .nav-tabs {
    border-radius:5px;
    overflow:hidden;
}
.tabsArea .nav-tabs .nav-link.active{
    color:white;
    background:#0097e4;
}
.tabs-area .nav-link{
    width: 50%;
}

.form-group input{
    box-shadow: 0 0px 20px rgba(224, 224, 224, 0.2);
    border: 1px solid #f1f1f1;
    box-shadow: 0 0px 20px rgba(224,224,224,0.3);
}
`;

const CustomButton = styled(Button)`
  font-size: 11pt;
  color: #fff !important;
  border-radius: 5px;
  padding-left: 20px;
  padding-right: 20px;
  width:100%;
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





export default function Login() {
    return (
        <Layout>
            <PageTopSide title="Giriş Yap" desc="Topluluğumuzun avantajlarından faydalanmak için sistemimize giriş yapabilirsiniz." />

            <LoginArea>
                <Container>
                    <Row className="tabsArea">
                        <Col xs={12} md={8} lg={4}>
                            <Row>
                                <Col xs={12}>
                                    <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
                                        <Tab eventKey="login" title="Giriş Yap">
                                            <Form className="mt-4">
                                                <Form.Group controlId="formBasicEmail">
                                     
                                                    <Form.Control type="email" placeholder="E-Posta" />
                                                </Form.Group>
                                                <Form.Group controlId="formBasicPassword">
                                          
                                                    <Form.Control type="password" placeholder="Parola" />
                                                </Form.Group>
                                                <Form.Group controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Beni Hatırla" />
                                                </Form.Group>
                                                <CustomButton type="submit">
                                                    Giriş Yap
                                                </CustomButton>
                                            </Form>
                                        </Tab>
                                        <Tab eventKey="register" title="Kayıt Ol">
                                            <Form className="mt-4">

                                                <Form.Group controlId="formBasicEmail">                      
                                                    <Form.Control type="email" placeholder="Ad" />
                                                </Form.Group>
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Control type="email" placeholder="Soyad" />
                                                </Form.Group>
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Control type="email" placeholder="E-Posta" />
                                                </Form.Group>
                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Control type="password" placeholder="Parola" />
                                                </Form.Group>
                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Control type="password" placeholder="Parola(Tekrar)" />
                                                    <Form.Text className="text-muted">
                                                    Kullanıcı sözleşmelerimiz hazırlanmaktadır. Hazırlık aşaması bittikten sonra belirttiğiniz E-Posta adresine onay maili ve sözleşmeler iletilecektir.
                                                </Form.Text>
                                                </Form.Group>
                                                {/* <Form.Group controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Kullanım Koşulları'nı okudum ve kabul ediyorum." />
                                                </Form.Group> */}

                      
                                                <CustomButton type="submit" className="mt-3">
                                                    Kayıt Ol
                                                </CustomButton>
                                            </Form>
                                        </Tab>
                                    </Tabs>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Container>
            </LoginArea>
        </Layout>
    )
}
