import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components';


const MainArea = styled.div`
margin-top:15px;
padding: 20px 10px;
border: 1px solid #e8e8e8;
    border-radius: 5px;
span{
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    background:#fff;

}


`;


export default function OrganizationEventCard({title,img,content}) {
    return (
        <MainArea>
            <Row>
                <Col xs={12} md={3}>
                <img src={img} />
                </Col>
                <Col xs={12} md={9} className="mt-3 mt-md-0">
    <h3>{title}</h3>
                    <span>{content}</span>
                </Col>
            </Row>
        </MainArea>
    )
}
