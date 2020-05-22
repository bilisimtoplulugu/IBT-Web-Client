import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';


const CustomAboutArea = styled.div`
padding:60px 0;

h1{
    font-weight: 700;
    margin-bottom: 0 !important;
    font-weight: 700;
    color: #253a4a;
    margin-bottom: 15px
}
.subTitle{
    font-size: 20pt;
    font-weight: 500;
    opacity: .5;
}

.contentSide{

    margin-top:40px;
}
.counts{
    color: #253a4a;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align:center;
}
.organizationCount .count{
    font-size: 25pt;
    font-weight: 500;

}
.organizationCount h2{
    display: inline;
    opacity: .5;
}
.and{
    font-size: 10pt;
    opacity: .5;
}
`;

export default function AboutArea() {
    return (
        <CustomAboutArea>
        <Container>
            <div  data-aos="fade-right">
                <h1>İstanbul Bilişim Topluluğu</h1>
                <h2 className="subTitle">Neler Yapar ?</h2>
            </div>
            <Row>
                <Col xs={12} md={6}>
                    <div className="contentSide" data-aos="fade-right">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, <br /> <br />
                      but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                      containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                    </div>
                </Col>
                <Col className="counts mt-5 mt-md-0" xs={12} md={6}>
                    <div data-aos="fade-right">
                        <div className="organizationCount">
                            <span className="count">1.493 <h2>Üye</h2></span>
                        </div>
                        <div className="organizationCount">
                            <span className="count">27 <h2>Kulüp ile </h2></span>
                        </div>

                        <h2>hizmetinizdeyiz</h2>
                    </div>

                </Col>
            </Row>

        </Container>
    </CustomAboutArea>


    )
}
