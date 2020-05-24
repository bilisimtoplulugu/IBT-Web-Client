import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';


const CustomAboutArea = styled.div`
padding:60px 0;

h1{
    font-weight: 500;
    margin-bottom: 0 !important;
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
                        İstanbul’da bulunan bilişim kulüplerini tek çatı altında toplamayı amaçlıyoruz. Kulüp etkinliklerine tasarım ve paylaşım desteği vermekteyiz.
                        Öğrencilerin sektörel gelişimine önem veriyoruz ve kariyer sohbetleri, workshoplar ve online seminerler düzenliyoruz. <br /> <br /> Bu şekilde, alanında uzman eğitmenlerden yardım alıp 
                        öğrencilere yeni teknolojileri öğrenme fırsatı sunuyoruz. 
                        Ayrıca sosyal medyayı aktif kullanıyor ve tüm öğrencilerin güncel teknolojilerden haberdar olmalarını sağlayacak içerikler üretiyoruz.

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
