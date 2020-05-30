import React from 'react'
import { Card } from 'react-bootstrap'
import { CardBody } from 'react-bootstrap/Card'
import styled from 'styled-components';



const CustomCardArea = styled(Card)`
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
img {
    width: 100%;
  }
`;



export default function CustomCard({ children }) {
    return (
        <CustomCardArea>
            <CustomCardArea.Body>
                {children}
            </CustomCardArea.Body>
        </CustomCardArea>
    )
}







