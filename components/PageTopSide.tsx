import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components';

const EventTop = styled.div`
background-image:url(${"./../assets/images/homeBg.jpg"});
height:300px;
h1{
    font-size:25pt;
}
color: #fff;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position:relative;
    &::before{
        content: "";
        background: rgba(13, 42, 62, 0.8);
        backdrop-filter:blur(3px);
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
    }
    @media(max-width:768px){
        height:400px;

    }
`
const EventTopInner = styled.div`
position: absolute;
    top: 50%;
left:0;
right:0;
@media(max-width:768px){
    top: 40%;

}
`;

export default function PageTopSide(props : {
    title:any,desc:any;
}) {
    return (
        <EventTop>

                <EventTopInner>
                    <Container>
                        <h1>{props.title}</h1>
                        <p>{props.desc}</p>
                    </Container>
                </EventTopInner>

            </EventTop>
    )
}
