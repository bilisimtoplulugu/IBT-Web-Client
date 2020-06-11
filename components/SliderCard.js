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
    color:white;
    transition:all .3s ease;
  }
  .cardContent:hover{
    transition:all .3s ease;
    text-decoration:none;
    opacity:1;
  }
`;

export default function SliderCard(props) {
  return (
    <CustomSliderCard>
      <img src={props.img} alt={props.title} />
      <span className="cardTitle">{props.title}</span>
      <a href={props.link} className="cardContent">{props.text}</a>
    </CustomSliderCard>
  );
}
