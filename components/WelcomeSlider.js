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
    link:"https://lnkd.in/dg9nync",
    title:"Okan Üniversitesi"},
    { img:"/assets/clubs/arelsitclub.jpg",
    text:"Society of ınformation Technology",
    link:"https://lnkd.in/dZfbSqC",
    title:"İstanbul Arel Üniversitesi"},
    { img:"/assets/clubs/ankayazlm.jpg",
    text:"Anka Yazılım Klübü",
    link:"https://lnkd.in/dpv5vEB",
    title:"Maltepe Üniversitesi"},
    { img:"/assets/clubs/bauyazilim.jpeg",
    text:"Yazılım ve Bilişim Kulübü",
    link:"https://www.linkedin.com/company/bauyazilim/",
    title:"Bahçeşehir Üniversitesi"},
    { img:"/assets/clubs/beykentmis.jpg",
    text:"Yönetim Bilişim Sistemleri Kulübü",
    link:"https://www.instagram.com/beykentmis/",
    title:"Beykent Üniversitesi"},
    { img:"/assets/clubs/beykentyazmuh.jpg",
    text:"Yazılım Mühendisliği Kulübü",
    link:"https://www.instagram.com/beykentymk/",
    title:"Beykent Üniversitesi"},
    { img:"/assets/clubs/beykozsiber.jpg",
    text:"Siber Güvenlik Kulübü",
    link:"https://twitter.com/BeykozSiber",
    title:"Beykoz Üniversitesi"},
    { img:"/assets/clubs/btkiuc.jpg",
    text:"Bilişim Teknolojileri Kulübü",
    link:"https://www.instagram.com/btkiuc/",
    title:"İstanbul Üniversitesi - Cerrahpaşa"},
    { img:"/assets/clubs/compru.png",
    text:"Bilisim Klübü",
    link:"https://www.linkedin.com/company/compru/",
    title:"Piri Reis Üniversitesi"},
    { img:"/assets/clubs/dogusbilisim.jpg",
    text:"Bilisim Klübü",
    link:"https://www.instagram.com/doubilisim/",
    title:"Doğuş Üniversitesi"},
    { img:"/assets/clubs/eemk.jpeg",
    text:"Elektrik & Elektronik Mühendisliği Kulübü",
    link:"https://www.linkedin.com/company/mueemk/",
    title:"Marmara Üniversitesi"},
    { img:"/assets/clubs/fmvisikbilgisayar.jpg",
    text:"Bilisim Klübü",
    link:"https://www.instagram.com/isikbilgisayarkulubu/",
    title:"Işık Üniversitesi"},
    { img:"/assets/clubs/iauyazilim.jpg",
    text:"Yazılım Klübü",
    link:"",
    title:"İstanbul Aydın Üniversitesi"},
    { img:"/assets/clubs/iesu.jpg",
    text:"Bilisim Klübü",
    link:"https://lnkd.in/dBSF5E5",
    title:"İstanbul Esenyurt Üniversitesi"},
    { img:"/assets/clubs/igubilisim.jpg",
    text:"Bilisim Klübü",
    link:"https://www.instagram.com/igubilisim/",
    title:"İstanbul Gelişim Üniversitesi"},
    { img:"/assets/clubs/imusiber.jpg",
    text:"Siber Güvenlik ve Teknoloji Topluluğu",
    link:"https://lnkd.in/dz-KSJs",
    title:"İstanbul Medeniyet Üniversitesi"},
    { img:"/assets/clubs/istinyeyazmuh.jpeg",
    text:"Yazılım Mühendisliği Kulübü",
    link:"",
    title:"İstinye Üniversitesi"},
    { img:"/assets/clubs/itumb.jpg",
    text:"Matematik & Bilgisayar Kulübü",
    link:"https://lnkd.in/dXEdaap",
    title:"İstanbul Teknik Üniversitesi"},
    { img:"/assets/clubs/iucbilg.png",
    text:"Bilgisayar Kulübü",
    link:"https://www.linkedin.com/company/iucbk/",
    title:"İstanbul Üniversitesi - Cerrahpaşa"},
    { img:"/assets/clubs/izubilisim.jpg",
    text:"Bilisim Klübü",
    link:"https://www.instagram.com/izubtk/",
    title:"İstanbul Sabahattin Zaim Üniversitesi"},
    { img:"/assets/clubs/kulturmb.png",
    text:"Matematik & Bilgisayar Kulübü",
    link:"https://www.linkedin.com/company/i%CC%87k%C3%BC-matematik-ve-bilgisayar/",
    title:"İstanbul Kültür Üniversitesi"},
    { img:"/assets/clubs/marmaradaft.jpg",
    text:"Tasarım & Gelecek Teknoloji Kulübü",
    link:"https://www.instagram.com/marmaradaftt/",
    title:"Marmara Üniversitesi"},
    { img:"/assets/clubs/marmarauni.png",
    text:"Bilgisayar Mühendisliği Kulübü",
    link:"https://www.instagram.com/marmara_cse",
    title:"Marmara Üniversitesi"},
    { img:"/assets/clubs/okanyazilm.jpg",
    text:"Yazılım Topluluğu Kulübü",
    link:"https://lnkd.in/dhKyDNT",
    title:"Okan Üniversitesi"},
    { img:"/assets/clubs/uskudardot.jpg",
    text:"Dijital Oyun Tasarım Kulübü",
    link:"https://instagram.com/uskudardot?igshid=nnisa6ir7g0h",
    title:"Üsküdar Üniversitesi"},
    { img:"/assets/clubs/yeditepebilgisayar.png",
    text:"Bilgisayar Topluluğu Kulübü",
    link:"https://www.linkedin.com/company/yeditepe-bilgisayar-toplulu%C4%9Fu/about/",
    title:"Yeditepe Üniversitesi"},
    { img:"/assets/clubs/yubilisim.jpeg",
    text:"Bilişim Kulübü",
    link:"https://www.linkedin.com/in/yu-bili%C5%9Fim-kul%C3%BCb%C3%BC-972178162/",
    title:"Yeditepe Üniversitesi"},
    { img:"/assets/clubs/isikmis.png",
    text:"Management Information Society",
    link:"https://www.linkedin.com/company/isikmis/",
    title:"Işık Üniversitesi"},
    { img:"/assets/clubs/medimis.jpg",
    text:"Management Information Society",
    link:"https://www.instagram.com/medipolmis/",
    title:"İstanbul Medipol Üniversitesi"}
   
  ])

  return (
    <SliderArea>
      <Container>
        <CustomSlider {...settings}>
          {clubs.map((x,y) => (
                <SliderCard
                key={y}
                img={x.img}
                text={x.text}
                title={x.title}
                link={x.link}
              />
    

          ))}
        </CustomSlider>
      </Container>
    </SliderArea>
  );
}
