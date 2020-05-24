import React from 'react'
import Layout from '../../components/Layout'
import PageTopSide from '../../components/PageTopSide'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'


const MainArea = styled.div`

margin:50px 0;


`;

const Pages = styled.div`
box-shadow: 0 3px 20px rgba(169,169,169,0.5);
border-radius:5px;
overflow:hidden;
.active-button{
    opacity:1;
}
@media(max-width:991px){
    box-shadow:unset;
    a{
        width:unset;
    }
}
`;


const PagesButton = styled.a`


font-size: 11pt;
color: #fff !important;
padding-left:  20px;
padding-right:  20px;
opacity: .5;
background:#0097e4;
width: 100%;
border-radius: 0;

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
.userImage{
    position:relative;
    overflow: hidden;
    border-radius: 50%;
}
.userImageEdit{
    position:absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: #88888852;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 15pt;
    opacity:0;
    cursor:pointer;
    transition: all .3s ease;
}
.userImageEdit:hover{
    opacity:1;
    transition: all .3s ease;
}
.editProfile{
    text-align: right;
    position:absolute;
    top: 0;
    right: 15px;
}
.editProfile a{
  
    opacity: .5;
    color: #253a4a;
    font-size:15pt;
    transition: all .3s ease;
}
.editProfile a:hover{
    opacity:1;
    transition: all .3s ease;
}
.segment{
    padding-bottom:40px;
}
.segment h3{
    padding-bottom:10px;
}
.eventCard img{
    border-radius: 5px;
    box-shadow: 0 0px 20px rgba(169, 169, 169, 0.4);

}
@media(max-width:576px){

    .userImage{
        width: 120px;
    
    }

}
.latestEvents{
    overflow-x: auto;
 
    flex-wrap: nowrap;
}
.latestEvents > .col-6{
    display: inline-block;
    float: none;
}
`;


export default function index() {
    return (
        <Layout>
            <PageTopSide bgImage="./../assets/images/homeBg.jpg" defaultHeight="250" title="Hesabım" desc="" />
            <MainArea>
                <Container>
                    <Row>
                        <Col xs={12} >
                            <CustomCard>
                                <CustomCard.Body>
                                    <Row >
                                        <Col xs={12} className="segment">
                                            <Row>
                                                <Col xs={12} sm={3} md={2}>
                                                    <div className="userImage">
                                                        <img src="/assets/images/berkaydogukan.jpg" />

                                                    </div>
                                                </Col>
                                                <Col xs={12} sm={9} md={10} className="d-flex align-items-center">
                                                    <div>
                                                        <span className="userName">Berkay Doğukan Urhan</span>
                                                        <span className="userMail">mail@dogukanurhan.com</span>

                                                    </div>

                                                </Col>

                                            </Row>
                                            <div className="editProfile">

                                                <Link href="profile/edit">
                                                    <a><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></a>
                                                </Link>
                                            </div>
                                        </Col>
                                        <Col xs={12} className="segment">
                                            <h3>
                                                Son Etkinlikler
                                            </h3>
                                            <Row className="latestEvents">
                                                <Col xs={6}  md={3}>
                                                    <div className="eventCard">
                                                        <img src="/assets/images/image1.png" />
                                                    </div>
                                                </Col>
                                                <Col xs={6}  md={3}>
                                                    <div className="eventCard">
                                                        <img src="/assets/images/image1.png" />
                                                    </div>
                                                </Col>
                                                <Col xs={6}  md={3}>
                                                    <div className="eventCard">
                                                        <img src="/assets/images/image1.png" />
                                                    </div>
                                                </Col>
                                                <Col xs={6}  md={3}>
                                                    <div className="eventCard">
                                                        <img src="/assets/images/image1.png" />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </CustomCard.Body>
                            </CustomCard>
                        </Col>
                    </Row>
                </Container>
            </MainArea>
        </Layout>
    )
}
