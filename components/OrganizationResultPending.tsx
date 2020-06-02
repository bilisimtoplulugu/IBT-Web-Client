import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CustomCard from './CustomCard'
import styled from 'styled-components';

const MainArea = styled.div`
text-align:center;

img{
    width:70px;
}


`;


export default function OrganizationResultPending() {
    return (
        <Container>
            <Row className="d-flex justify-content-center">
                <Col xs={12} sm={8}>
                <MainArea>
                <CustomCard>
                    <img className="mt-3" src="/assets/icon/pending.svg" />
                    <p className="mt-4">Topluluk oluşturma isteğiniz iletilmiştir. Gerekli kontroller sağlandıktan sonra topluluk profiliniz aktifleştirilecektir.</p>
                </CustomCard>
                </MainArea>
                </Col>

            </Row>
        </Container>
    )
}
