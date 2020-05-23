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


.checkContainer {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 14px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  /* Hide the browser's default checkbox */
  .checkContainer input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    transition: all 0.3s ease;
  }
  
  /* Create a custom checkbox */
  .checkmark {
      border-radius:3px;
    position: absolute;
    top: 3px;
    left: 0;
    height: 15px;
    width: 15px;
    background-color: #eee;
  }
  

  
  /* When the checkbox is checked, add a blue background */
  .checkContainer input:checked ~ .checkmark {
    transition: all 0.3s ease;
    background-color: #0097e4;
  }
  
  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  /* Show the checkmark when checked */
  .checkContainer input:checked ~ .checkmark:after {
    display: block;
  }
  
  /* Style the checkmark/indicator */
  .checkContainer .checkmark:after {
    left: 5px;
    top: 1px;
    width: 5px;
    height: 11px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
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
                               
                                                    <label className="checkContainer">Beni Hatırla
                                                            <input type="checkbox"  />
                                                            <span className="checkmark"></span>
                                                                    </label>
                                           
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
