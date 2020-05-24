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


export default function WorkshopDetailCard() {
    return (

        <div data-aos="fade-right">

            <CustomCard >
                <CustomCard.Body>
                    <div className="topSide" >
                        <h4 className="title">Workshop</h4>
                        <span className="subTitle">Neler Yapılır?</span>

                    </div>

                    <p>
                    Workshoplarda, bilişim sektöründen eğitmenler ile yazılım, tasarım gibi konuları uygulayarak interaktif dersler yapıyor ve uygulayarak öğreniyoruz.</p>

                    <div className="topSide" >

                        <span className="subTitle">Nasıl Katılabilirsiniz?</span>

                    </div>
                    <p>
                    Sitemizdeki etkinlikler kısmında düzenlenecek Workshoplar’ı inceleyebilir ve mevcut etkinliklere katılabilirsiniz. 
                    </p>
                </CustomCard.Body>
            </CustomCard>

        </div>

    )
}
