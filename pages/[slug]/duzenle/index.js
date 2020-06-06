import React, {useState, useEffect} from 'react';
import Layout from '../../../components/Layout';
import PageTopSide from '../../../components/PageTopSide';
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Tab,
  Nav,
  Button,
  Modal,
} from 'react-bootstrap';
import styled from 'styled-components';
import changePassword from '../../../api/user/changePassword';
import {useSelector} from 'react-redux';
import changePersonalInfo from '../../../api/user/changePersonalInfo';
import changeProfilePhoto from '../../../api/user/changeProfilePhoto';

import {API_URL} from '../../../config';
import {auth} from '../../../redux/actions/user';
import {useDispatch} from 'react-redux';
import {useRouter} from 'next/router';
import CustomCard from '../../../components/CustomCard';

const MainArea = styled.div`
  margin: 50px 0;

  .selectImage {
    cursor: pointer;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    opacity: 0;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
    color: White;
    transition: all 0.3s ease;
  }
  .selectImage:hover {
    opacity: 1;
    transition: all 0.3s ease;
  }
  .selectImageModal .previewPhoto {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .userImage {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    height: 120px;
    width: 120px;
  }

  .nav-pills a {
    color: #0097e4;
  }
  .nav-pills .nav-link.active {
    background-color: #0097e4;
  }
`;

const CustomButton = styled(Button)`
  font-size: 11pt;
  color: #fff !important;
  border-radius: 5px;
  padding-left: 20px;
  padding-right: 20px;
  background: #0097e4;
  border: none;
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

export default function index() {
  const activeUser = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const router = useRouter();

  /* change personal info form states */
  const [username, setUsername] = useState(activeUser.username);
  const [name, setName] = useState(activeUser.name);
  const [surname, setSurname] = useState(activeUser.surname);
  const [email, setEmail] = useState(activeUser.email);
  const [profilePhoto, setProfilePhoto] = useState('');
  const [previewPhoto, setPreviewPhoto] = useState(null);

  /* change pw form states */
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [newPassAgain, setNewPassAgain] = useState('');

  //Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (activeUser.username !== router.query.slug){
      router.push('/');
    }
  }, [activeUser]);

  /* ABÇ: TEMP AUTH */
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token && Array.isArray(activeUser)) {
      dispatch(auth(token));
    }
  }, [auth]);

  const personalInfoChangeSubmit = async (e) => {
    e.preventDefault();

    try {
      await changePersonalInfo(activeUser._id, name, surname, username, email);
      dispatch(auth(localStorage.getItem('jwt')));
      console.log('personal data changed');
    } catch (error) {
      console.log(error); //something went wrong, should show to user
    }
  };

  const profilePhotoChangeSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', profilePhoto);

    try {
      await changeProfilePhoto(activeUser._id, formData);
      dispatch(auth(localStorage.getItem('jwt')));
      console.log('profile photo updated'); // message to user
    } catch (error) {
      console.log(error); //something went wrong, should show to user
    }
  };

  const passChangeSubmit = async (e) => {
    e.preventDefault();

    try {
      await changePassword(activeUser._id, oldPass, newPass, newPassAgain);
      dispatch(auth(localStorage.getItem('jwt')));
      console.log('pass changed'); // message to user
    } catch (error) {
      console.log(error); //something went wrong, should show to user
    }
  };

  const changePhoto = async (e) => {
    setProfilePhoto(e);

    var reader = new FileReader();
    var url = reader.readAsDataURL(e);

    reader.onloadend = function (e) {
      setPreviewPhoto(reader.result);
    }.bind(this);
  };

  const addDefaultSrc = async (e) => {
    e.target.src = '/assets/images/default.png';
  };
  return (
    <div>
      <PageTopSide
        responsiveTop="50"
        responsiveHeight="200"
        bgImage="./../assets/images/homeBg.jpg"
        defaultHeight="250"
        title="Düzenle"
        desc=""
      />

      <MainArea>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Fotoğraf Seç</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <Form onSubmit={profilePhotoChangeSubmit}>
              <Row>
                <Col xs={12}>
                  <Form.Group controlId="formBasicPassword">
                    <img
                      className="previewPhoto"
                      src={
                        previewPhoto
                          ? previewPhoto
                          : '/assets/images/default.png'
                      }
                      style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                      }}
                    />
                  </Form.Group>
                </Col>

                <Col xs={12}>
                  <Form.File
                    id="custom-file"
                    type="file"
                    accept="image/*"
                    name="file"
                    custom
                    label="Custom file input"
                    className="shadow-none mb-3 mt-3"
                    onChange={({currentTarget: {files}}) =>
                      changePhoto(files[0])
                    }
                  />
                </Col>
                <Col xs={12}>
                  <CustomButton className="btn-block" type="submit">
                    Fotoğrafı Güncelle
                  </CustomButton>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
        </Modal>

        <Container>
          <Row>
            <Col xs={12}>
              <CustomCard>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row>
                    <Col md={3}>
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                          <Nav.Link eventKey="first">
                            Kişisel bilgilerim
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Parola Ayarları</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col md={9}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <Form onSubmit={personalInfoChangeSubmit}>
                            <Row>
                              <Col
                                xs={12}
                                md={3}
                                className="mb-5 mt-5 mt-md-0 mb-md-0"
                              >
                                <div className="userImage">
                                  <img
                                    onError={addDefaultSrc}
                                    src={`${API_URL}/images/${activeUser._id}.png`}
                                  />
                                  <div
                                    className="selectImage"
                                    onClick={handleShow}
                                  >
                                    <i className="fas fa-user-edit"></i>
                                  </div>
                                </div>
                              </Col>
                              <Col xs={12} md={9}>
                                <Row>
                                  <Col xs={12}>
                                    <Form.Group controlId="formBasicEmail">
                                      <Form.Label>Kullanıcı Adı</Form.Label>
                                      <Form.Control
                                        type="text"
                                        className="shadow-none"
                                        placeholder="Adınız"
                                        value={username}
                                        onChange={({target: {value}}) =>
                                          setUsername(value)
                                        }
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col xs={12}>
                                    <Form.Group controlId="formBasicEmail">
                                      <Form.Label>Adı</Form.Label>
                                      <Form.Control
                                        type="text"
                                        className="shadow-none"
                                        placeholder="Adınız"
                                        value={name}
                                        onChange={({target: {value}}) =>
                                          setName(value)
                                        }
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col xs={12}>
                                    <Form.Group controlId="formBasicPassword">
                                      <Form.Label>Soyadı</Form.Label>
                                      <Form.Control
                                        type="text"
                                        className="shadow-none"
                                        placeholder="Soyadınız"
                                        value={surname}
                                        onChange={({target: {value}}) =>
                                          setSurname(value)
                                        }
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col xs={12}>
                                    <Form.Group controlId="formBasicPassword">
                                      <Form.Label>E-Posta</Form.Label>
                                      <Form.Control
                                        type="email"
                                        className="shadow-none"
                                        placeholder="E-Posta"
                                        value={email}
                                        onChange={({target: {value}}) =>
                                          setEmail(value)
                                        }
                                      />
                                    </Form.Group>
                                  </Col>
                                  {/*                                     <Col xs={12} md={6}>
                                      <Form.Group>
                                        <Form.File
                                          id="custom-file"
                                          label="Fotoğraf"
                                          data-browse="Seç"
                                        />
                                      </Form.Group>
                                    </Col> */}
                                </Row>
                              </Col>
                              <Col
                                xs={12}
                                className="d-flex justify-content-end"
                              >
                                <CustomButton type="submit">
                                  Kaydet
                                </CustomButton>
                              </Col>
                            </Row>
                          </Form>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Form onSubmit={passChangeSubmit}>
                            <Row>
                              <Col
                                xs={12}
                                md={3}
                                className="mb-5 mt-5 mt-md-0 mb-md-0"
                              ></Col>
                              <Col xs={12} md={6}>
                                <Row>
                                  <Col xs={12}>
                                    <Form.Group controlId="formBasicEmail">
                                      <Form.Label>Eski Parolanız</Form.Label>
                                      <Form.Control
                                        type="password"
                                        className="shadow-none"
                                        placeholder="Eski Parolanız"
                                        value={oldPass}
                                        onChange={({target: {value}}) =>
                                          setOldPass(value)
                                        }
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col xs={12}>
                                    <Form.Group controlId="formBasicPassword">
                                      <Form.Label>Yeni Parolanız</Form.Label>
                                      <Form.Control
                                        type="password"
                                        className="shadow-none"
                                        placeholder="Yeni Parolanız"
                                        value={newPass}
                                        onChange={({target: {value}}) =>
                                          setNewPass(value)
                                        }
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col xs={12}>
                                    <Form.Group controlId="formBasicPassword">
                                      <Form.Label>
                                        Yeni Parolanız(Tekrar)
                                      </Form.Label>
                                      <Form.Control
                                        type="password"
                                        className="shadow-none"
                                        placeholder="Yeni Parolanız(Tekrar)"
                                        value={newPassAgain}
                                        onChange={({target: {value}}) =>
                                          setNewPassAgain(value)
                                        }
                                      />
                                    </Form.Group>
                                  </Col>
                                </Row>
                              </Col>
                              <Col
                                xs={12}
                                md={9}
                                className="d-flex justify-content-end"
                              >
                                <CustomButton type="submit">
                                  Güncelle
                                </CustomButton>
                              </Col>
                            </Row>
                          </Form>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </CustomCard>
            </Col>
          </Row>
        </Container>
      </MainArea>
    </div>
  );
}
