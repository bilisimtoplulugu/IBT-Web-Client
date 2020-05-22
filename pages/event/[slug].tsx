import React from 'react'
import Layout from '../../components/Layout'
import PageTopSide from '../../components/PageTopSide'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'


const EventDetailArea = styled.div`
margin-top:30px;
.topSide{
    margin-bottom: 20px;
}
.title{
    font-weight: 700;
    margin-bottom: 0 !important;
    font-size:20pt;
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
`
export default function EventDetail() {
    return (
        <Layout>
              <PageTopSide title="Cem Ekinci - KolayBi | Career Talks" desc='Girişimcilik ve Globalleşme", "Covid-19 Girişimciliğe Etkileri ve Geleceği" ve "Girişimcilik ve Yatırım Süreçleri"nden bahsedeceği online etkinliğimize hepinizi bekliyoruz!'/>
            
                <EventDetailArea>    
                    <Container>
                    <div className="topSide" >
                        <span className="title">Etkinlik Hakkında</span>
                        <span className="subTitle">Detaylar</span>
                    </div>
                    </Container>
                </EventDetailArea>
                
        </Layout>
    )
}
