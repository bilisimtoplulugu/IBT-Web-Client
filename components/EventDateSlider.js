import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import getNearEvents from '../api/event/getNearEvents';
import isoToNormal from '../utils/isoToNormal';
import {useSelector} from 'react-redux';

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
  initialSlide: 0,
  slidesToShow: 2, // ABÇ default:5
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
export default function EventDateSlider({handleSelectedEventId}) {
  const nearEvents = useSelector((state) => state.eventReducer);
  const [selectedEventId, setSelectedEventId] = useState('');

  function handleSelectedEvent(id) {
    setSelectedEventId(id);
    handleSelectedEventId(id);
  }

  return (
    <div data-aos="fade-right">
      <CustomSlider {...settings}>
        {nearEvents &&
          nearEvents.map((event, index) => {
            if (selectedEventId == '' && index == 0)
              handleSelectedEvent(event._id);
            return (
              <EventDateCard
                onClick={() => handleSelectedEvent(event._id)}
                className={event._id == selectedEventId && 'active'}
                key={index}
              >
                {isoToNormal(event.date)}
                <br />
                {event.title}
              </EventDateCard>
            );
          })}
      </CustomSlider>
    </div>
  );
}
