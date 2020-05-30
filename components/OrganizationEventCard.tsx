import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components';


const MainArea = styled.div`
padding: 10px;
    border: 1px solid #f5f5f5;
    border-radius: 5px;
span{
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    background:#fff;

}


`;


export default function OrganizationEventCard() {
    return (
        <MainArea>
            <Row>
                <Col xs={12} md={3}>
                <img src="/assets/images/imagesadi.png" />
                </Col>
                <Col xs={12} md={9} className="mt-3 mt-md-0">
                    <h3>Career Talks #5</h3>
                    <span>Herkese merhaba!
                    İstanbul Bilişim Topluluğu olarak “Career Talks” serimize hız kesmeden devam ediyoruz.Bu
                     hafta bize optiWisdom ‘un kurucusu Doç.Dr. Şadi Evren Şeker eşlik ediyor.</span>
                </Col>
            </Row>
        </MainArea>
    )
}
