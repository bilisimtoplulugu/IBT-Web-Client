import React, {useState, useEffect} from 'react';
import Layout from '../../components/Layout';
import PageTopSide from '../../components/PageTopSide';
import styled from 'styled-components';
import {Container, Row, Col, Form} from 'react-bootstrap';
import CustomCard from '../../components/CustomCard';

import DayPicker, {DateUtils} from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import {useDispatch, useSelector} from 'react-redux';
import {auth} from '../../redux/actions/user';
const MainArea = styled.div`
  margin-bottom: 30px;

  .contentArea {
    margin-top: -20px;
    justify-content: center;
    font-size: 12pt;
  }
  .form-group {
    margin-bottom: 25px;
  }
  .form-group input {
    font-size: 12pt;
  }
  .DayPickerInput {
    display: block;
  }
  .DayPickerInput input {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 12pt;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .DayPickerInput input:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
  }

  .photoArea {
    border: 3px dashed rgba(46, 62, 72, 0.12);
    border-radius: 8px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
  }
  .photoArea .size {
    font-size: 13pt;
    font-weight: 500;
    opacity: 0.5;
  }
  .photoArea img {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    object-fit: cover;
  }

  .photoArea .editButton {
    position: absolute;
    left: 15px;
    top: 5px;
    color: #0097e4;
  }
  .photoArea .editButton label {
    cursor: pointer;
    font-size: 20pt;
  }
  .text-muted {
    font-size: 10pt;
    margin-bottom: 5px;
  }
`;
const CustomButton = styled.label`
  font-size: 11pt;
  color: #fff !important;
  border-radius: 5px;
  padding-left: 20px;
  padding-right: 20px;

  background: #0097e4;
  border: none;
  margin-left: 5px;

  transition: all 0.3s ease;
  &:hover {
    background: #019eef;
    border-color: #019eef;

    transition: all 0.3s ease;
  }

  @media (max-width: 991px) {
    margin: 10px 0;
  }
`;

const MONTHS = [
  'Ocak',
  'Şubat',
  'Mart',
  'Nisan',
  'Mayıs',
  'Haziran',
  'Temmuz',
  'Ağustos',
  'Eylül',
  'Ekim',
  'Kasım',
  'Aralık',
];
const WEEKDAYS_LONG = [
  'Pazar',
  'Pazartesi',
  'Salı',
  'Çarşamba',
  'Perşembe',
  'Cuma',
  'Cumartesi',
];

const WEEKDAYS_SHORT = ['Pa', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct'];
export default function addevent() {
  const dispatch = useDispatch();
  const activeUser = useSelector((state) => state.userReducer);

  /* ABÇ: TEMP AUTH */
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token && Array.isArray(activeUser)) {
      dispatch(auth(token));
    }
  }, [auth]);

  const [showLimit, setShowLimit] = useState(false);

  const [previewThumbnail, setPreviewThumbnail] = useState(null);

  const changePhoto = async (e) => {
    var reader = new FileReader();
    var url = reader.readAsDataURL(e);

    reader.onloadend = function (e) {
      setPreviewThumbnail(reader.result);
    }.bind(this);
  };

  function parseDate(str, format, locale) {
    const parsed = dateFnsParse(str, format, new Date(), {locale});
    if (DateUtils.isDate(parsed)) {
      return parsed;
    }
    return undefined;
  }

  function formatDate(date, format, locale) {
    return dateFnsFormat(date, format, {locale});
  }

  const FORMAT = 'dd.MM.yyyy';
  return (
    <Layout>
      <PageTopSide
        responsiveTop="50"
        responsiveHeight="200"
        bgImage="./../assets/images/homeBg.jpg"
        defaultHeight="250"
        title="Etkinlik Oluştur"
        desc="Topluluk Adı"
      />

      <MainArea>
        <Container>
          <Row className="contentArea">
            <Col xs={12} lg={8}>
              <CustomCard>
                <Form>
                  <Form.Row>
                    <Col xs={12}>
                      <Form.Group controlId="title">
                        <Form.Label>Başlık</Form.Label>
                        <Form.Control
                          type="text"
                          className="shadow-none"
                          placeholder="Katılımcı ara."
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={6}>
                      <Form.Group controlId="date">
                        <Form.Label>Tarih</Form.Label>
                        <DayPickerInput
                          dayPickerProps={{
                            months: MONTHS,
                            weekdaysLong: WEEKDAYS_LONG,
                            weekdaysShort: WEEKDAYS_SHORT,
                            firstDayOfWeek: 1,
                            className: 'shadow-none',
                          }}
                          formatDate={formatDate}
                          format={FORMAT}
                          parseDate={parseDate}
                          placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={6}>
                      <Form.Group controlId="time">
                        <Form.Label>Saat</Form.Label>
                        <Form.Control type="time" className="shadow-none" />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group controlId="time">
                        <Form.Label>Öne Çıkarılan Görsel</Form.Label>
                        <div className="photoArea">
                          <CustomButton className="btn" htmlFor="fileUpload">
                            Fotoğraf Yükle
                          </CustomButton>
                          <span className="size">En az 1200 x 675 piksel</span>
                          {previewThumbnail && <img src={previewThumbnail} />}
                          {previewThumbnail && (
                            <div className="editButton">
                              <label htmlFor="fileUpload">
                                <i className="fas fa-pen-square"></i>
                              </label>
                            </div>
                          )}

                          <input
                            hidden
                            id="fileUpload"
                            onChange={({currentTarget: {files}}) =>
                              changePhoto(files[0])
                            }
                            type="file"
                            accept="image/*"
                          />
                        </div>
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Açıklama</Form.Label>
                        <span className="text-muted">
                          Katılımcılarınızı gündem dahil neyle karşılaşacağı, ne
                          getirmesi gerektiği ve grubun nasıl bulunacağı
                          hakkında bilgilendirin.
                        </span>

                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Gerçekleşeceği Yer</Form.Label>
                        <Form.Check type="checkbox" label="Online Etkinlik" />
                        <Form.Control
                          type="text"
                          className="shadow-none mt-2"
                          placeholder="Mekan"
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Form.Group
                        controlId="exampleForm.ControlTextarea1"
                        className="spe"
                      >
                        <Form.Label>Özel Ayarlar</Form.Label>

                        <Row>
                          <Col xs={9}>
                            <Form.Check
                              type="switch"
                              id="custom-switch"
                              label="Katılımcı Sınırı"
                              onChange={() => setShowLimit(!showLimit)}
                            />
                          </Col>
                          <Col xs={3}>
                            {showLimit && (
                              <Form.Control
                                type="number"
                                value="20"
                                className="shadow-none mt-2"
                                placeholder="Mekan"
                              />
                            )}
                          </Col>
                        </Row>
                      </Form.Group>
                    </Col>
                  </Form.Row>
                </Form>
              </CustomCard>
            </Col>
          </Row>
        </Container>
      </MainArea>
    </Layout>
  );
}
