import React from 'react'
import { Container, Tab, Row, Col, Nav } from 'react-bootstrap'

import CustomCard from './CustomCard';
import styled from 'styled-components';
import OrganizationEvents from './OrganizationEvents';

const MainArea = styled.div`

`;


export default function OrganizationProfile() {
    return (
        <Container>
            <CustomCard>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col lg={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Etkinlikler</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Katılımcılar</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col lg={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <OrganizationEvents />
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    Katılımcılar
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </CustomCard>
        </Container>
    )
}
