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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
           </p>
  
            <div className="topSide" >

            <span className="subTitle">Nasıl Katılabilirsiniz?</span>

            </div>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
</p>

            </CustomCard.Body>
        </CustomCard>

       </div>

    )
}
