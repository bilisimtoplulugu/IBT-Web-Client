import React from 'react'
import styled, { keyframes } from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import WelcomeSlider from './WelcomeSlider';


const Welcome = styled.div`

position:relative;

}
padding: 100px 0;
width: 100%;
    height: 100vh;
background-image:url(${"./../assets/images/homeBg.jpg"});
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
`;
const Title = styled.div`

font-weight: 700;
color: #fff;
font-size: 25pt;
margin-bottom:15px;
`;
const SubTitle = styled.span`
font-weight: 700;
    color: #17cff9;
    margin-bottom:15px;
`;

const WelcomeInnerArea = styled.div`
position: absolute;
    left: 0;
    right: 0;
    top: 300px;
   
    @media(max-height:850px){
        top: 250px;
    }
    @media(max-height:768px){

        top: 160px;
    }
`;

const TextSliderAnimation = keyframes`
    0% {margin-top:-200px;}
    10% {margin-top:-100px;}  /* 5% delay */
    45% {margin-top:-100px;}
    50% {margin-top:0px;} /* 5% delay */
    100% {margin-top:0px;}

  
`;
const SliderWrapper = styled.div`
.slider-text1 {
    animation: ${TextSliderAnimation} 5s linear infinite;
  }
.slider div {
    color:#fff;
    height: 50px;
    margin-bottom: 50px;
    box-sizing: border-box;
  }
.slider{
    height: 50px;
    overflow: hidden;   /* hide the text outside the slider div area */
  }
`;

export default function WelcomeInner() {
    return (
            <Welcome>
                <WelcomeInnerArea>
                    <Container>
                        <Row>
                            <Col xs={12} md={6}>

                                <Title><SubTitle>İSTANBUL <br /></SubTitle>
                                    <SliderWrapper>
                                        <div className="slider">
                                            <div className="slider-text1">HOŞGELDİNİZ</div>
                                            <div className="slider-text2">BİLİŞİM TOPLULUĞU</div>
                                        </div>
                                    </SliderWrapper>

                                </Title>

                                <p>
                                    İstanbul'da bulunan üniversite kulüplerince düzenlenecek olan bilişimle ilgili etkinliklerin paylaşıldığı
                                    ve bu etkinliklerin organize edildiği platformdur.
                                        </p>
                            </Col>
                            <Col xs={6}>

                            </Col>
                        </Row>
                    </Container>
                </WelcomeInnerArea>

                <WelcomeSlider />
        </Welcome>
    )
}
