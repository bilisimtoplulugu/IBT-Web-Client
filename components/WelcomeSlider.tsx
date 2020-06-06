import React, { useState } from 'react';
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
    z-index: 2;
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

  const [clubs, setClubs] = useState([
    { img:"/assets/clubs/okanbil.jpg",
    text:"Bilisim Klübü",
    title:"Okan Üniversitesi"},
    { img:"/assets/clubs/arelsitclub.jpg",
    text:"Society of ınformation Technology",
    title:"İstanbul Arel Üniversitesi"},
    { img:"/assets/clubs/ankayazlm.jpg",
    text:"Anka Yazılım Klübü",
    title:"Maltepe Üniversitesi"},
    { img:"/assets/clubs/aydinlogo.png",
    text:"Bilisim Klübü",
    title:"Okan Üniversitesi"},
    { img:"/assets/clubs/bauyazilim.jpeg",
    text:"Yazılım ve Bilişim Kulübü",
    title:"Bahçeşehir Üniversitesi"},
    { img:"/assets/clubs/beykentlogo.png",
    text:"Bilisim Klübü",
    title:"Beykent Üniversitesi"},
    { img:"/assets/clubs/beykentmis.jpg",
    text:"Yönetim Bilişim Sistemleri Kulübü",
    title:"Beykent Üniversitesi"},
    { img:"/assets/clubs/beykentyazmuh.jpg",
    text:"Yazılım Mühendisliği Kulübü",
    title:"Beykent Üniversitesi"},
    { img:"/assets/clubs/beykozsiber.jpg",
    text:"Siber Güvenlik Kulübü",
    title:"Beykoz Üniversitesi"},
    { img:"/assets/clubs/btkiuc.jpg",
    text:"Bilişim Teknolojileri Kulübü",
    title:"İstanbul Üniversitesi - Cerrahpaşa"},
    { img:"/assets/clubs/compru.png",
    text:"Bilisim Klübü",
    title:"Piri Reis Üniversitesi"},
    { img:"/assets/clubs/dogusbilisim.jpg",
    text:"Bilisim Klübü",
    title:"Doğuş Üniversitesi"},
    { img:"/assets/clubs/eemk.jpeg",
    text:"Elektrik & Elektronik Mühendisliği Kulübü",
    title:"Marmara Üniversitesi"},
    { img:"/assets/clubs/fmvisikbilgisayar.jpg",
    text:"Bilisim Klübü",
    title:"Işık Üniversitesi"},
    { img:"/assets/clubs/iauyazilim.jpg",
    text:"Yazılım Klübü",
    title:"İstanbul Aydın Üniversitesi"},
    { img:"/assets/clubs/iesu.jpg",
    text:"Bilisim Klübü",
    title:"İstanbul Esenyurt Üniversitesi"},
    { img:"/assets/clubs/igubilisim.jpg",
    text:"Bilisim Klübü",
    title:"İstanbul Gelişim Üniversitesi"},
    { img:"/assets/clubs/imusiber.png",
    text:"Siber Güvenlik ve Teknoloji Topluluğu",
    title:"İstanbul Medeniyet Üniversitesi"},
    { img:"/assets/clubs/istinyeyazmuh.jpg",
    text:"Yazılım Mühendisliği Kulübü",
    title:"İstinye Üniversitesi"},
    { img:"/assets/clubs/itumb.jpeg",
    text:"Matematik & Bilgisayar Kulübü",
    title:"İstanbul Teknik Üniversitesi"},
    { img:"/assets/clubs/iucbilg.png",
    text:"Bilgisayar Kulübü",
    title:"İstanbul Üniversitesi - Cerrahpaşa"},
    { img:"/assets/clubs/izubilisim.jpg",
    text:"Bilisim Klübü",
    title:"İstanbul Sabahattin Zaim Üniversitesi"},
    { img:"/assets/clubs/kulturmb.png",
    text:"Matematik & Bilgisayar Kulübü",
    title:"İstanbul Kültür Üniversitesi"},
    { img:"/assets/clubs/marmaradaft.png",
    text:"Tasarım & Gelecek Teknoloji Kulübü",
    title:"Marmara Üniversitesi"},
    { img:"/assets/clubs/marmarauni.png",
    text:"Bilgisayar Mühendisliği Kulübü",
    title:"Marmara Üniversitesi"},
    { img:"/assets/clubs/okanyazilm.jpg",
    text:"Yazılım Topluluğu Kulübü",
    title:"Okan Üniversitesi"},
    { img:"/assets/clubs/uskudardot.jpg",
    text:"Dijital Oyun Tasarım Kulübü",
    title:"Üsküdar Üniversitesi"},
    { img:"/assets/clubs/yeditepebilgisayar.png",
    text:"Bilgisayar Topluluğu Kulübü",
    title:"Yeditepe Üniversitesi"},
    { img:"/assets/clubs/yubilisim.jpeg",
    text:"Bilişim Kulübü",
    title:"Yeditepe Üniversitesi"},
   
  ])

  return (
    <SliderArea>
      <Container>
        <CustomSlider {...settings}>
          {clubs.map((x,y) => (
                <SliderCard
                img={x.img}
                text={x.text}
                title={x.title}
              />
    

          ))}
        </CustomSlider>
      </Container>
    </SliderArea>
  );
}
