import React from 'react';
import styled from 'styled-components';

const CustomSliderCard = styled.div`
  text-align: center;
  > img {
    border-radius: 50%;
    width: 90px;
    display: inline;
  }
  .cardTitle {
    font-size: 12pt;
    margin-top: 20px;
    font-weight: 500;
    display: block;
  }
  .cardContent {
    opacity: 0.5;
  }
`;

export default function SliderCard(props: {img: any; title: any; text: any}) {
  return (
    <CustomSliderCard>
      <img src={props.img} alt={props.title} />
      <span className="cardTitle">{props.title}</span>
      <span className="cardContent">{props.text}</span>
    </CustomSliderCard>
  );
}
