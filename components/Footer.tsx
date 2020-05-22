import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter, faGithub, faYoutube, faGit } from '@fortawesome/free-brands-svg-icons'


const CustomFooter = styled.div`
padding:80px 0;
border-top:1px solid #f5f5f5;

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
    font-size:20pt;
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
`
export default function Footer() {
    return (

        <Container >
            <CustomFooter>
               <Row>
                   <Col xs={3}>
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
               </Row>
            </CustomFooter>
        </Container>

    )
}
