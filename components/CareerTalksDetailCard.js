import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import styled from 'styled-components';
import Link from 'next/link';


const CustomCard = styled(Card)`
box-shadow: 0 0px 20px rgba(169, 169, 169, 0.20);
border:none;
color:#253a4a;
margin-top: 20px;
.title{
    font-size: 20pt;
    font-weight: 400;

}

.subTitle{
    
    font-size: 15pt !important;
}
`;


export default function HomeEventDetailCard() {
    return (

        <div data-aos="fade-right">

            <CustomCard >
                <CustomCard.Body>
                    <div className="topSide" >
                        <h4 className="title">Kariyer Sohbetleri</h4>
                        <span className="subTitle">Neler Yapılır?</span>

                    </div>

                    <p>
                    Kariyer Sohbetleri serimizde; bilişim dünyasında girişim, tasarım, kodlama, yapay zeka, IoT gibi konular üzerine çalışmalar yapan kişileri ağırlıyoruz. İnteraktif sohbetler sayesinde bilişim alanında kariyer planı yapmak isteyen öğrenciler sorularına cevap bulabiliyor.
                    </p>

                    <div className="topSide" >

                        <span className="subTitle">Nasıl Katılabilirsiniz?</span>

                    </div>
                    <p>
                    Sitemizdeki etkinlikler kısmında düzenlenecek Kariyer Sohbetleri’ni inceleyebilir ve mevcut etkinliklere katılabilirsiniz.
                    </p>

                </CustomCard.Body>
            </CustomCard>

        </div>

    )
}
