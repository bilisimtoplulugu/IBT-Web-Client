import React from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';
import Link from 'next/link';

const CustomCard = styled(Card)`
  box-shadow: 0 0px 20px rgba(169, 169, 169, 0.2);
  border: none;
  color: #253a4a;
  margin-top: 20px;
  .title {
    font-size: 20pt;
    font-weight: 400;
  }

  .subTitle {
    font-size: 15pt !important;
  }
`;

export default function WebinarDetailCard() {
  return (
    <div data-aos="fade-right">
      <CustomCard>
        <CustomCard.Body>
          <div className="topSide">
            <h4 className="title">Online Seminerler</h4>
            <span className="subTitle">Neler Yapılır?</span>
          </div>

          <p>
          Teknoloji ve bilişim ile ilgili alanlarda çalışan kişilerden sektör hakkında bilgiler ediniyoruz. Yapay zeka, artırılmış gerçeklik, tasarım gibi konular ele alınıyor. Online seminerlerimiz, YouTube kanalımız üzerinde düzenleniyor ve bu sayede soru cevap şeklinde interaktif ilerliyor.
          </p>

          <div className="topSide">
            <span className="subTitle">Nasıl Katılabilirsiniz?</span>
          </div>
          <p>
          Sitemizdeki etkinlikler kısmında düzenlenecek Online Seminerler’i inceleyebilir ve mevcut etkinliklere katılabilirsiniz. 

          </p>
        </CustomCard.Body>
      </CustomCard>
    </div>
  );
}
