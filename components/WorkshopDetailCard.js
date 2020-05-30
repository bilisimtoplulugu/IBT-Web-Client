import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import styled from 'styled-components';
import Link from 'next/link';
import CustomCard from './CustomCard';


const MainArea = styled.div`
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
            <MainArea>




                <CustomCard >

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

                </CustomCard>


            </MainArea>
        </div>
    )
}
