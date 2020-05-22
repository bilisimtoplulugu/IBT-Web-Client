import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter, faGithub, faYoutube, faGit } from '@fortawesome/free-brands-svg-icons'


const CustomFooter = styled.div`
background:#f5f5f5;
.container{
    border-top:1px solid #f1f1f1;
    padding:80px 0;
}

.logo{
    width: 200px;
    opacity: .5;
    transition: all .3s ease;
}
.logo:hover{
    opacity:1;
    transition: all .3s ease;
}
.social-links{
    margin-top:10px;
}
.social-links a{
    font-size: 16pt;
    padding:10px;
    color: #868686;
    opacity: .5;
    transition: all .3s ease;

}
.social-links a:hover{

    opacity:1;    
    transition: all .3s ease;


}
.copyright{
    display: block;
    margin-top: 15px;
    opacity: .5;
    color: #868686;
}
.footerTitle{
    font-size: 13pt;
    font-weight: 500;
    color: #86888a;
}
.footerLinks ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
.footerLinks a{
    display: block;
    font-weight: 300;
    font-size: 11pt;
    color:#253a4a;
    opacity: .8;
    padding: 5px 0;
    text-decoration: none;
}
`
export default function Footer() {
    return (
        <CustomFooter>
        <Container >
         
                <Row>
                    <Col xs={12}  md={4} className="text-center text-md-left">
                        <Row>
                            <Col xs={12}>
                                <Link href="/">
                                    <a>
                                        <img className="logo" src="/assets/images/logo-blue.png" />    </a>
                                </Link>
                                <span className="copyright">© 2020 İstanbul Bilişim Topluluğu</span>
                            </Col>
                            <Col xs={12}>
                                <div className="social-links">
                                    <Link href="/">
                                        <a>
                                            <FontAwesomeIcon className="instagramIcon" icon={faFacebook} />
                                        </a>
                                    </Link>
                                    <Link href="/">
                                        <a>
                                            <FontAwesomeIcon className="instagramIcon" icon={faInstagram} />
                                        </a>
                                    </Link>
                                    <Link href="/">
                                        <a>
                                            <FontAwesomeIcon className="instagramIcon" icon={faTwitter} />
                                        </a>
                                    </Link>
                                    <Link href="/">
                                        <a>
                                            <FontAwesomeIcon className="instagramIcon" icon={faYoutube} />
                                        </a>
                                    </Link>
                                    <Link href="/">
                                        <a>
                                            <FontAwesomeIcon className="instagramIcon" icon={faGithub} />
                                        </a>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={8} className="footerLinks">
                        <Row>
                            <Col xs={6} md={3}>
                                <h6 className="footerTitle mt-5 mt-md-0 ">
                                    Hakkımızda
                                    </h6>
                                <ul>
                                    <li>
                                        <Link href="/">
                                            <a >Hakkımızda</a>
                                        </Link>
                                        </li>
                                    <li>  
                                        <Link href="/">
                                            <a >Etkinlikler</a>
                                        </Link>
                                        </li>
                                    <li>  
                                    <Link href="/">
                                            <a >Blog</a>
                                        </Link>
                                        </li>
                                    <li>  
                                        <Link href="/">
                                            <a >İletişim</a>
                                        </Link>
                                        </li>
                                </ul>
                            </Col>
                            <Col xs={6} md={3}>
                                <h6 className="footerTitle mt-5 mt-md-0 ">
                                    Hakkımızda
                                    </h6>
                                <ul>
                                    <li>
                                        <Link href="/">
                                            <a >Hakkımızda</a>
                                        </Link>
                                        </li>
                                    <li>  
                                        <Link href="/">
                                            <a >Etkinlikler</a>
                                        </Link>
                                        </li>
                                    <li>  
                                    <Link href="/">
                                            <a >Blog</a>
                                        </Link>
                                        </li>
                                    <li>  
                                        <Link href="/">
                                            <a >İletişim</a>
                                        </Link>
                                        </li>
                                </ul>
                            </Col>
                            <Col xs={6} md={3}>
                                <h6 className="footerTitle mt-5 mt-md-0 ">
                                    Hakkımızda
                                    </h6>
                                <ul>
                                    <li>
                                        <Link href="/">
                                            <a >Hakkımızda</a>
                                        </Link>
                                        </li>
                                    <li>  
                                        <Link href="/">
                                            <a >Etkinlikler</a>
                                        </Link>
                                        </li>
                                    <li>  
                                        <Link href="/">
                                            <a >Blog</a>
                                        </Link>
                                        </li>
                                    <li>  
                                        <Link href="/">
                                            <a >İletişim</a>
                                        </Link>
                                        </li>
                                </ul>
                            </Col>
                            <Col xs={6} md={3}>
                                <h6 className="footerTitle mt-5 mt-md-0 ">
                                    Hakkımızda
                                    </h6>
                                <ul>
                                    <li>
                                        <Link href="/">
                                            <a >Hakkımızda</a>
                                        </Link>
                                        </li>
                                    <li>  
                                        <Link href="/">
                                            <a >Etkinlikler</a>
                                        </Link>
                                        </li>
                                    <li>  
                                        <Link href="/">
                                            <a >Blog</a>
                                        </Link>
                                        </li>
                                    <li>  
                                        <Link href="/">
                                            <a >İletişim</a>
                                        </Link>
                                        </li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    
                </Row>
        
        </Container>
        </CustomFooter>
    )
}
