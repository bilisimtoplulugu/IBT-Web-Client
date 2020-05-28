import React from 'react'
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import CustomCard from './CustomCard';



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


const Wrapper = styled.div`


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


export default function OrganizationCreate() {
    return (
        <Wrapper>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col xs={4}>
                        <CustomCard >
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
                                    <Form.Control as="textarea" className="shadow-none" />
                                </Form.Group>
                                <Form.Group>
                                    <CustomButton classname="btn" type="submit">
                                        Oluştur
                            </CustomButton>
                                </Form.Group>
                            </Form>

       
                        </CustomCard>
                    </Col>
                </Row>
            </Container>
        </Wrapper>

    )
}
