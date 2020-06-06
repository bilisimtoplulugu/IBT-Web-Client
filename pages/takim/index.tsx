import React, {useEffect, useState} from 'react';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import PageTopSide from '../../components/PageTopSide';
import {Row, Col, Container} from 'react-bootstrap';
import CustomCard from '../../components/CustomCard';
import {auth} from '../../redux/actions/user';
import {useSelector, useDispatch} from 'react-redux';
const MainArea = styled.div`
  margin: 30px 0;
  .avatar {
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
  }

  .member {
    transition: all 0.3s ease;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0px 20px rgba(167, 167, 167, 0.2);
  }

  .member:hover .avatar {
    transition: all 0.3s ease;
    transform: scale(1.05);
  }
  .social {
    font-size: 17pt;
    margin-top: 15px;
  }
  .social a {
    color: white;
    margin: 0 10px;
    transition: all 0.3s ease;
    opacity: 0.5;
  }
  .social a:hover {
    transition: all 0.3s ease;
    opacity: 1;
  }

  .member .content {
    position: absolute;
    bottom: -80px;
    left: 0px;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    color: white;
    padding-left: 10px;
    padding-bottom: 10px;
    transition: all 0.3s ease;
  }
span{
  overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
  .member:hover .content {
    transition: all 0.3s ease;
    bottom: 0px;
    background: rgba(0, 0, 0, 0.5);
  }
`;

export default function index() {
  const dispatch = useDispatch();
  const activeUser = useSelector((state) => state.userReducer);

  const [team,setTeam] = useState([
    {
      name:"Ahmet Buğra Çakıcı",
      title:"Kurucu Ortak & Yönetici",
      instagram:"",
      linkedin:"https://www.linkedin.com/in/ahmetbcakici/",
      img:"/assets/team/ahmetavatar.jpg"
    },
    {
      name:"Seyit Furkan Bozkurt",
      title:"Kurucu Ortak & Yazılım Geliştirici",
      instagram:"",
      linkedin:"https://www.linkedin.com/in/seyit-furkan-bozkurt-390302152/",
      img:"/assets/team/furkanavatar.jpeg"
    },
    {
      name:"Veysel Demirel",
      title:"Kurucu Ortak & Tasarımcı",
      instagram:"",
      linkedin:"https://www.linkedin.com/in/veysel-demirel/",
      img:"/assets/team/veyselavatar.jpeg"
    },
    {
      name:"Yaren Durak",
      title:"İdari İşler Sorumlusu",
      instagram:"",
      linkedin:"https://www.linkedin.com/in/yaren-durak-9a1a3b199/",
      img:"/assets/team/yarenvatar.jpeg"
    },
    {
      name:"Eda Nur Demiray",
      title:"İçerik Ekip Lideri",
      instagram:"",
      linkedin:"https://www.linkedin.com/in/edademiray/",
      img:"/assets/team/edavatar.jpeg"
    },
    {
      name:"Merve Can",
      title:"Kurumsal İletişim Ekip Lideri",
      instagram:"",
      linkedin:"https://www.linkedin.com/in/merve-can-b97ab91a5/",
      img:"/assets/team/mrv.png"
    },
    {
      name:"Umut Korkmaz",
      title:"Yazılım Ekip Lideri",
      instagram:"",
      linkedin:"https://www.linkedin.com/in/umut-korkmaz/",
      img:"/assets/team/umutavatar.jpeg"
    },
    {
      name:"Berkay Doğukan Urhan",
      title:"Yazılım Geliştirici",
      instagram:"",
      linkedin:"https://www.linkedin.com/in/berkay-dogukan-urhan/",
      img:"/assets/team/berkaydogukan.jpg"
    },
    {
      name:"Doğukan Çiçek",
      title:"Kurumsal İletişim",
      instagram:"",
      linkedin:"https://www.linkedin.com/in/do%C4%9Fukan-%C3%A7i%C3%A7ek-890a891a6/",
      img:"/assets/team/dogukan.jpeg"
    },
    {
      name:"Fatih Ejder",
      title:"Yayın Moderatörü",
      instagram:"",
      linkedin:"https://www.linkedin.com/in/fatih-ejder-6ba19b1aa/",
      img:"/assets/team/fatihh.jpeg"
    },
    {
      name:"Merve Satmaz",
      title:"Tasarımcı",
      instagram:"",
      linkedin:"https://www.linkedin.com/in/merve-satmaz-760a0b135/",
      img:"/assets/team/mervesatmaz.jpeg"
    },
    {
      name:"Seray Öztürk",
      title:"İçerik Geliştirici",
      instagram:"",
      linkedin:"https://www.linkedin.com/in/serayozturk/",
      img:"/assets/team/seray.jpeg"
    }
  ]);

  /* ABÇ: TEMP AUTH */
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token && Array.isArray(activeUser)) {
      dispatch(auth(token));
    }
  }, [auth]);

  return (
    <div>
      <PageTopSide
        responsiveTop="40"
        responsiveHeight="300"
        bgImage="./../assets/images/homeBg.jpg"
        defaultHeight="300"
        title="Takımımız"
        desc="Farklı üniversite ve bölümlerdeki öğrencilerden oluşan takımımız ile kulüp, etkinlik ve tanıtım süreçlerini yürütüyoruz. Bize LinkedIn adreslerimizden ulaşabilirsiniz."
      />

      <MainArea>
        <Container>
          <Row>
            {team.map((x,y)=> (
              <Col key={y} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <div className="member">
                <div className="overlay"></div>
                <img
                  src={x.img}
                  className="avatar"
                  alt={x.name}
                />
                <div className="content">
                  <h5 className="mt-2">{x.name}</h5>
                  <span>{x.title}</span>
                  <div className="social">
                    <a href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href={x.linkedin}>
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            ))}
            
          </Row>
        </Container>
      </MainArea>
    </div>
  );
}
