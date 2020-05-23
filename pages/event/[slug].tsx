import React from 'react'
import Layout from '../../components/Layout'
import PageTopSide from '../../components/PageTopSide'
import styled from 'styled-components'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faVideo, faUsers, faHeadphones } from '@fortawesome/free-solid-svg-icons'

const EventDetailArea = styled.div`
margin-top:50px;
.topSide{
    border-bottom:1px solid #f5f5f5;
    padding-bottom:10px;
    margin-bottom 10px;
}
.title{
    font-weight: 600;
    margin-bottom: 0 !important;
    font-size: 13pt;
    display:block;
    color: #253a4a;
}
.subTitle{
    font-size: 15pt;
    font-weight: 500;
    opacity: .5;
}
.contentSide{
    margin-top:20px;
}

img{
    width:100%;
    border-radius:5px;
}
position:relative;

`

const FilterButton = styled.a`

font-size: 17pt;
color: #fff !important;
padding-left:  20px;
padding-right:  20px;
background:#0097e4;
border-radius: 5;

transition: all .3s ease;
&:hover {
    background:#019eef;
    border-color:#019eef;

    transition: all .3s ease;
}
&:hover{
    opacity:1;
}
@media(max-width:991px){
    margin: 10px 0;
}


`;


const CustomCard = styled(Card)`
box-shadow: 0 0px 20px rgba(169,169,169,0.2);
    border: none;
    color: #253a4a;

    .clock{
        font-size: 12pt;
    font-weight: 400;
    padding-left: 15px;
    }
    
    .rightContent svg{
        font-size: 15pt;
        opacity: .5;
    }
    .participants{

        display:inline-flex;

        & ul{
            padding-left:15px;
            margin:0;
            list-style:none;
        }
    }

`

const AttendArea = styled.div`
margin-top:50px;
background:#253b4b;;
color:white;
position: sticky;
padding: 10px 0;
    bottom: 0;
    span{
        display:block;
        font-weight: 400;
    font-size: 15pt;
    }
    .attendClock{
        opacity:.5;
    }
`;

export default function EventDetail() {
    return (
        <Layout>
            <PageTopSide title="Career Talks #5 | Girişimcilik" desc='Girişimcilik ve Globalleşme", "Covid-19 Girişimciliğe Etkileri ve Geleceği" ve "Girişimcilik ve Yatırım Süreçleri"nden bahsedeceği online etkinliğimize hepinizi bekliyoruz!' />

            <EventDetailArea>
                <Container>
                    <Row>
                        <Col xs={{ order: 2, span: 12 }} md={{ order: 1, span: 8 }}>
                            <CustomCard>
                                <CustomCard.Body>
                                    <img className="mb-3" src="/assets/images/image1.png" />
                                    <span className="subTitle ">Detaylar</span>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br /> <br />
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                </CustomCard.Body>
                            </CustomCard>
                        </Col>
                        <Col xs={{ order: 1, span: 12 }} md={{ order: 1, span: 4 }} className="mb-3 ">
                            <CustomCard >
                                <CustomCard.Body className="rightContent">
                                    <div className="topSide" >
                                        <span className="subTitle">Düzenleyen</span>
                                        <span className="title">İstanbul Bilişim Topluluğu</span>
                                    </div>
                                    <div className="mb-3">
                                        <FontAwesomeIcon icon={faClock} />
                                        <span className="clock">11 Mayıs Pazartesi, 13.30</span>
                                    </div>
                                    <div className="mb-3">
                                        <FontAwesomeIcon icon={faUsers} />
                                        <div className="participants">
                                            <ul>
                                                <li>Deneme Katılımcı</li>
                                                <li>Deneme Katılımcı</li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <FontAwesomeIcon icon={faHeadphones} />
                                        <span className="clock">Fatih </span>
                                    </div>
                                    <div className="mb-3">
                                        <FontAwesomeIcon icon={faVideo} />
                                        <span className="clock">Online Etkinlik</span>
                                    </div>
                                </CustomCard.Body>
                            </CustomCard>
                        </Col>
                    </Row>
                </Container>
                <AttendArea>
                    <Container>
                        <Row>
                            <Col xs={8} sm={8} className="d-none d-sm-block">

                                <span className="clock attendClock">11 Mayıs Pazartesi, 13.30</span>
                                <span className="clock">Career Talks #5 | Girişimcilik</span>
                            </Col>
                            <Col xs={12} sm={4} className="d-block d-sm-flex align-items-sm-center justify-content-sm-end">
                                <div >
                                <FilterButton className="btn d-block">Katıl</FilterButton>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </AttendArea>
            </EventDetailArea>

        </Layout>
    )
}
