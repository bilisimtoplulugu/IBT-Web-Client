import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import {useDispatch, useSelector} from 'react-redux';
import {addEvent} from '../redux/actions';

const CustomSlider = styled(Slider)`
  margin: 30px 0;
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
    box-shadow: 0 0px 20px rgba(224, 224, 224, 0.2);
  }
  .slick-next {
    right: -10px;
  }
  .slick-prev {
    left: -10px;
    z-index: 1;
  }
  .slick-prev:before {
    text-shadow: 0px 0px 10px rgba(146, 146, 146, 0.4);
    opacity: 1;
  }
  .slick-next:before {
    text-shadow: 0px 0px 10px rgba(146, 146, 146, 0.4);
    opacity: 1;
  }
  .active {
    color: White;
    background: #0097e4;
    transform: scale(1.04);
    box-shadow: 0 3px 20px rgba(169, 169, 169, 0.75);
  }
`;

const settings = {
  infinite: true,
  speed: 500,
  initialSlide: 0,
  slidesToShow: 5,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
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

const EventDateCard = styled.div`
  text-align: center;
  background: #f7f7f7;
  padding: 15px 0;
  font-weight: 400;
`;
export default function EventDateSlider() {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) => state.eventReducer);

  return (
    <div data-aos="fade-right">
      <CustomSlider {...settings}>
        <EventDateCard className={selectedEvent == 1 && 'active'} onClick={() => dispatch(addEvent(1))}>
          11 Mayıs Pazartesi,2020
        </EventDateCard>
        <EventDateCard className={selectedEvent == 2 && 'active'} onClick={() => dispatch(addEvent(2))}>
          12 Mayıs Salı,2020
        </EventDateCard>
        <EventDateCard className={selectedEvent == 3 && 'active'} onClick={() => dispatch(addEvent(3))}>
          13 Mayıs Çarşamba,2020
        </EventDateCard>
        <EventDateCard className={selectedEvent == 4 && 'active'} onClick={() => dispatch(addEvent(4))}>
          14 Mayıs Perşembe,2020
        </EventDateCard>
        <EventDateCard className={selectedEvent == 5 && 'active'} onClick={() => dispatch(addEvent(5))}>
          15 Mayıs Cumartesi,2020
        </EventDateCard>
        <EventDateCard className={selectedEvent == 6 && 'active'} onClick={() => dispatch(addEvent(6))}>
          16 Mayıs Pazar,2020
        </EventDateCard>
      </CustomSlider>
    </div>
  );
}
