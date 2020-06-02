import React, {useEffect} from 'react';
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

  .member:hover .content {
    transition: all 0.3s ease;
    bottom: 0px;
    background: rgba(0, 0, 0, 0.5);
  }
`;

export default function index() {
  const dispatch = useDispatch();
  const activeUser = useSelector((state) => state.userReducer);

  /* ABÇ: TEMP AUTH */
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token && Array.isArray(activeUser)) {
      dispatch(auth(token));
    }
  }, [auth]);

  return (
    <Layout>
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
            <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
              <div className="member">
                <div className="overlay"></div>
                <img
                  src="/assets/images/berkaydogukan.jpg"
                  className="avatar"
                />
                <div className="content">
                  <h5 className="mt-2">Berkay Doğukan Urhan</h5>
                  <span>Yazılım Geliştirici</span>
                  <div className="social">
                    <a href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </MainArea>
    </Layout>
  );
}
