import React, { useState, useContext } from 'react'
import { Container } from 'react-bootstrap'
import styled  from 'styled-components';


const EventTop = styled.div`
background-image:url(${props => props.theme.bgImage});
height:${props => props.theme.defaultHeight}px;
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
EventTop.defaultProps = {
    theme:{
        defaultHeight:300,
        bgImage:"./../assets/images/homeBg.jpg",

    }
}
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
    title:any,desc:any,defaultHeight:any,bgImage:any;
}) {

    EventTop.defaultProps.theme.defaultHeight = props.defaultHeight;
    EventTop.defaultProps.theme.bgImage = props.bgImage;

    return (
        <EventTop >

                <EventTopInner>
                    <Container>
                        <h1>{props.title}</h1>
                        <p>{props.desc}</p>
                    </Container>
                </EventTopInner>

            </EventTop>
    )
}
