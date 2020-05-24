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
        height:${props => props.theme.responsiveHeight}px;

    }
`
EventTop.defaultProps = {
    theme:{
        defaultHeight:300,
        bgImage:"./../assets/images/homeBg.jpg",
        responsiveHeight:400,
        responsiveTop:40

    }
}

const EventTopInner = styled.div`
position: absolute;
    top: 50%;
left:0;
right:0;
@media(max-width:768px){
    top: ${props => props.theme.responsiveTop}%;

}
`;

EventTopInner.defaultProps = {
    theme:{
        
        responsiveTop:40

    }
}

export default function PageTopSide(props : {
    title:any,desc:any,defaultHeight:any,bgImage:any,responsiveHeight:any,responsiveTop:any;
}) {

    EventTop.defaultProps.theme.defaultHeight = props.defaultHeight;
    EventTopInner.defaultProps.theme.responsiveTop = props.responsiveTop;

    EventTop.defaultProps.theme.responsiveHeight = props.responsiveHeight;
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
