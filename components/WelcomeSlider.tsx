import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import {Container} from 'react-bootstrap';
// import okanBil from '/assets/images/okanbil.jpg'
// import iucbilg from '/assets/images/iucbilg.png'
// import kulturmb from '/assets/images/kulturmb.png'

import SliderCard from './SliderCard';

const SliderArea = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 70px;

  @media (max-width: 320px) {
    display: none;
  }
`;

const CustomSlider = styled(Slider)`
  .slick-dots li button::before {
    color: #253a4a;
  }
  .slick-dots li.slick-active button:before {
    color: #253a4a;
    opacity: 1;
  }
  .slick-arrow::before {
    color: white;
  }
  .slick-list {
    border-radius: 5px;
  }
  .slick-next {
    right: -10px;
  }
  .slick-prev {
    left: -10px;
  }
  .slick-prev:before {
    text-shadow: 0px 0px 10px rgba(146, 146, 146, 0.4);
    opacity: 0.3;
  }
  .slick-next:before {
    text-shadow: 0px 0px 10px rgba(146, 146, 146, 0.4);
    opacity: 0.3;
  }
`;

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function WelcomeSlider() {
  return (
    <SliderArea>
      <Container>
        <CustomSlider {...settings}>
          <SliderCard
            img="/assets/images/okanbil.jpg"
            text="Bilisim Klübü"
            title="Okan Üniversitesi"
          />
          <SliderCard
            img="/assets/images/iucbilg.png"
            text="Bilgisayar Klübü"
            title="İstanbul Üniversitesi - Cerrahpaşa"
          />
          <SliderCard
            img="/assets/images/kulturmb.png"
            text="Matematik Bilgisayar Kulübü"
            title="İstanbul Kültür Üniversitesi"
          />
          <SliderCard
            img="/assets/images/kulturmb.png"
            text="Bilisim Klübü"
            title="Okan Üniversitesi"
          />
          <SliderCard
            img="/assets/images/okanbil.jpg"
            text="Bilisim Klübü"
            title="Okan Üniversitesi"
          />
          <SliderCard
            img="/assets/images/iucbilg.png"
            text="Bilgisayar Klübü"
            title="İstanbul Üniversitesi - Cerrahpaşa"
          />
          <SliderCard
            img="/assets/images/kulturmb.png"
            text="Matematik Bilgisayar Kulübü"
            title="İstanbul Kültür Üniversitesi"
          />
          <SliderCard
            img="/assets/images/kulturmb.png"
            text="Bilisim Klübü"
            title="Okan Üniversitesi"
          />
          <SliderCard
            img="/assets/images/okanbil.jpg"
            text="Bilisim Klübü"
            title="Okan Üniversitesi"
          />
          <SliderCard
            img="/assets/images/iucbilg.png"
            text="Bilgisayar Klübü"
            title="İstanbul Üniversitesi - Cerrahpaşa"
          />
          <SliderCard
            img="/assets/images/kulturmb.png"
            text="Matematik Bilgisayar Kulübü"
            title="İstanbul Kültür Üniversitesi"
          />
          <SliderCard
            img="/assets/images/kulturmb.png"
            text="Bilisim Klübü"
            title="Okan Üniversitesi"
          />
          <SliderCard
            img="/assets/images/okanbil.jpg"
            text="Bilisim Klübü"
            title="Okan Üniversitesi"
          />
          <SliderCard
            img="/assets/images/iucbilg.png"
            text="Bilgisayar Klübü"
            title="İstanbul Üniversitesi - Cerrahpaşa"
          />
          <SliderCard
            img="/assets/images/kulturmb.png"
            text="Matematik Bilgisayar Kulübü"
            title="İstanbul Kültür Üniversitesi"
          />
          <SliderCard
            img="/assets/images/kulturmb.png"
            text="Bilisim Klübü"
            title="Okan Üniversitesi"
          />
        </CustomSlider>
      </Container>
    </SliderArea>
  );
}
