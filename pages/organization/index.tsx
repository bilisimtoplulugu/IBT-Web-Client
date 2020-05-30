import React from 'react'
import Layout from '../../components/Layout'
import PageTopSide from '../../components/PageTopSide'
import styled from 'styled-components';
import { Button, Card, Row, Col, Form, Container } from 'react-bootstrap';
;
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import OrganizationCreate from '../../components/OrganizationCreate';
import OrganizationResultPending from '../../components/OrganizationResultPending';
import OrganizationProfile from '../../components/OrganizationProfile';

const MainArea = styled.div`

margin:30px 0;

`;





export default function index() {
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
    )
}
