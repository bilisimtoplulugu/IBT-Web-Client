import React, {useEffect} from 'react';
import Layout from '../../components/Layout';
import PageTopSide from '../../components/PageTopSide';
import styled from 'styled-components';
import {Button, Card, Row, Col, Form, Container} from 'react-bootstrap';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import OrganizationCreate from '../../components/OrganizationCreate';
import OrganizationResultPending from '../../components/OrganizationResultPending';
import OrganizationProfile from '../../components/OrganizationProfile';
import {useDispatch, useSelector} from 'react-redux';
import {auth} from '../../redux/actions/user';

const MainArea = styled.div`
  margin: 30px 0;
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
        responsiveTop="50"
        responsiveHeight="200"
        bgImage="./../assets/images/homeBg.jpg"
        defaultHeight="250"
        title="Topluluk Oluştur"
        desc="Topluluğun ile birlikte gerçekleştirdiğin etkinliklerden haberdar olunması için topluluk profili oluşturabilirsin."
      />

      <MainArea>
        <OrganizationCreate />

        <OrganizationResultPending />

        <OrganizationProfile />
      </MainArea>
    </Layout>
  );
}
