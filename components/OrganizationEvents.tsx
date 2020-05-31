    import React from 'react'
    import { Row, Col, ButtonGroup, Button } from 'react-bootstrap'
    import OrganizationEventCard from './OrganizationEventCard'
    import Link from 'next/link'
    import styled from 'styled-components'


    const MainArea = styled.div`

    a{
        color:#253a4a;
    }

    `



    const CustomButton = styled(Button)`
    font-size: 11pt;
    color: #fff !important;
    border-radius: 5px;
    padding-left: 20px;
    padding-right: 20px;

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


    export default function OrganizationEvents() {
        return (
            <MainArea>
                <Row>
                    <Col xs={12} className="text-right">
                        <CustomButton>Yeni Etkinlik</CustomButton>

                    </Col>
                    <Col xs={12} >
                        <Link href="">
                            <a className="text-decoration-none"> <OrganizationEventCard title="Career Talks #5" content="Herkese merhaba!
                        İstanbul Bilişim Topluluğu olarak “Career Talks” serimize hız kesmeden devam ediyoruz.Bu
                        hafta bize optiWisdom ‘un kurucusu Doç.Dr. Şadi Evren Şeker eşlik ediyor." img="imagesadi" /></a>
                        </Link>
                    </Col>
                    <Col xs={12} >
                        <Link href="">
                            <a className="text-decoration-none">  <OrganizationEventCard title="Career Talks #5" content="Herkese merhaba!
                        İstanbul Bilişim Topluluğu olarak “Career Talks” serimize hız kesmeden devam ediyoruz.Bu
                        hafta bize optiWisdom ‘un kurucusu Doç.Dr. Şadi Evren Şeker eşlik ediyor." img="imagesadi" /></a>
                        </Link>
                    </Col>
                </Row>
            </MainArea>
        )
    }
