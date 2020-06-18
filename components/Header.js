import React, {useState, useRef, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  Form,
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Button,
  Modal,
  Tabs,
  Tab,
  Col,
  Dropdown,
} from 'react-bootstrap';
import Link from 'next/link';
import Toast from './Toast';

import styled from 'styled-components';
import {useRouter} from 'next/router';
import {login, register, logout} from '../redux/actions/user';
import confirmCode from '../api/user/confirmCode';
import emailVerification from '../api/user/emailVerification';

const Logo = styled.img`
  width: 150px;
`;

const NavLink = styled(Nav.Link)`
  font-size: 11pt;
  color: #fff !important;
  opacity: 0.9;
  transition: all 0.3s ease;
  &:hover {
    opacity: 1;
    transition: all 0.3s ease;
  }
`;
const CustomButton = styled.a`
  font-size: 11pt;
  color: #fff !important;
  border-radius: 5px;
  padding-left: 20px;
  padding-right: 20px;

  background: #0097e4;
  border: none;
  margin-left: 5px;
  display: flex;
  align-items: center;
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

const UserButton = styled(Button)`
  font-size: 11pt;
  color: #fff !important;
  border-radius: 5px;
  padding: 10px 20px;
  width: 100%;
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

const CustomHeader = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1;
  transition: all 0.5s ease;
`;

const CustomNavbar = styled(Navbar)`
  padding-left: 0;
  padding-right: 0;
  .show > .btn-primary.dropdown-toggle {
    background: none;
  }
  @media (max-width: 991px) {
    .navbar-collapse {
      background: rgb(37, 59, 75);
      padding: 10px 10px;
      border-radius: 5px;
    }
  }
`;

const CustomDropdown = styled(Dropdown)`
  button:focus,
  button:active,
  button:hover {
    background-color: unset !important;
  }

  .dropdown-item.active,
  .dropdown-item:active {
    background: none;
    color: unset;
  }
  button {
    font-size: 11pt;
    color: #fff !important;
    opacity: 0.9;
    background: none;
    border: none;
    padding: 8px;
  }
`;

const CustomModal = styled(Modal)`
  .resend a {
    color: #0097e4;
    cursor: pointer;
    font-size: 10pt;
  }
  .nav-tabs {
    border: none;
  }
  .nav-tabs .nav-link {
    width: 50%;
    text-align: center;
    color: rgb(37, 59, 75);
    border-radius: 5px;
  }
  .nav-tabs .nav-link.active:hover {
    background: #019eef;
    border-color: #019eef;
    color: white;
    transition: all 0.3s ease;
  }
  .nav-tabs .nav-link.active {
    background: #0097e4;
    transition: all 0.3s ease;
    color: white;
  }

  .form-group input {
    border: 1px solid #f1f1f1;
    box-shadow: 0 0px 20px rgba(224, 224, 224, 0.3);
  }

  .checkContainer {
    display: block;
    position: relative;
    padding-left: 25px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 14px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .checkContainer input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    transition: all 0.3s ease;
  }

  /* Create a custom checkbox */
  .checkmark {
    border-radius: 3px;
    position: absolute;
    top: 3px;
    left: 2px;
    height: 15px;
    width: 15px;
    background-color: #eee;
  }

  /* When the checkbox is checked, add a blue background */
  .checkContainer input:checked ~ .checkmark {
    transition: all 0.3s ease;
    background-color: #0097e4;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .checkContainer input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .checkContainer .checkmark:after {
    left: 5px;
    top: 1px;
    width: 5px;
    height: 11px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
export default function Header() {
  const [headerBgColor, setHeaderBgColor] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [code, setCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const activeUser = useSelector((state) => state.userReducer);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleScroll = () => {
    setHeaderBgColor(50 < window.pageYOffset);
  };

  const logoutOperation = () => {
    localStorage.removeItem('jwt');
    dispatch(logout());
    router.push('/');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  });

  const sendConfirmCode = async (e) => {
    try {
      e.preventDefault();
    } catch (error) {
      // do not do anything
    }

    if (!name || !surname || !email || !password || !passwordAgain) {
      console.log('Tüm alanlar doldurulmalıdır.');
      setToastMessage('Tüm alanlar doldurulmalıdır.');
      return;
    }

    if (password !== passwordAgain) {
      console.log('Şifreler eşleşmemektedir.');
      setToastMessage('Şifreler eşleşmemektedir.');
      return;
    }

    try {
      console.log('sendconfirmcode try');
      const res = await confirmCode(email);
      localStorage.setItem('email-code', res);
      setIsCodeSent(true);
    } catch ({response: {data}}) {
      console.log('sendconfirmcode catch');
      setToastMessage(data);
    }
  };

  const verifyEmail = async (e) => {
    e.preventDefault();
    if (!code) return; // code field can not be empty TOASTRHERE
    try {
      const res = await emailVerification(
        code,
        localStorage.getItem('email-code')
      );
      dispatch(register(name, surname, email, password));
      setShow(false);
    } catch ({response: {data}}) {
      console.log(data); // TOASTRHERE
      setToastMessage(data);
    }
  };

  const loginOperation = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      console.log('Tüm alanlar doldurulmalıdır.');
      setToastMessage('Tüm alanlar doldurulmalıdır.');
      return;
    }

    try {
      await dispatch(login(email, password));
      router.push('/')
      setShow(false);
    } catch ({response: {data}}) {
      setToastMessage(data);
    }
  };

  const resendCode = () => {
    sendConfirmCode();
  };
  return (
    <CustomHeader
      style={
        headerBgColor ? {background: '#253b4b', transition: 'all .5s ease'} : {}
      }
    >
      <CustomModal show={show} onHide={handleClose}>
        <CustomModal.Header
          closeButton
          style={{
            background: '#0097e4',
            color: 'white',
          }}
        >
          <CustomModal.Title>Giriş Yap</CustomModal.Title>
        </CustomModal.Header>

        <CustomModal.Body>
          <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
            <Tab eventKey="login" title="Giriş Yap">
              <Form className="mt-4" onSubmit={loginOperation}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="E-Posta"
                    value={email}
                    onChange={({target: {value}}) => setEmail(value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Parola"
                    value={password}
                    onChange={({target: {value}}) => setPassword(value)}
                  />
                </Form.Group>

                <label className="checkContainer">
                  Beni Hatırla
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>

                <Toast message={toastMessage} color="error">
                  {({onShow, onHide, state}) => (
                    <UserButton type="submit" onClick={onShow}>
                      Giriş Yap
                    </UserButton>
                  )}
                </Toast>
              </Form>
            </Tab>
            <Tab eventKey="register" title="Kayıt Ol">
              <Form className="mt-4" onSubmit={sendConfirmCode}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Ad"
                    value={name}
                    onChange={({target: {value}}) => setName(value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Soyad"
                    value={surname}
                    onChange={({target: {value}}) => setSurname(value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="E-Posta"
                    value={email}
                    onChange={({target: {value}}) => setEmail(value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Parola"
                    value={password}
                    onChange={({target: {value}}) => setPassword(value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Parola(Tekrar)"
                    value={passwordAgain}
                    onChange={({target: {value}}) => setPasswordAgain(value)}
                  />
                  <Form.Text className="text-muted">
                    Kullanıcı sözleşmelerimiz hazırlanmaktadır. Hazırlık aşaması
                    bittikten sonra belirttiğiniz E-Posta adresine onay maili ve
                    sözleşmeler iletilecektir.
                  </Form.Text>
                </Form.Group>
                {/* <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Kullanım Koşulları'nı okudum ve kabul ediyorum." />
                </Form.Group> */}

                <Toast message={toastMessage} color="error">
                  {({onShow, onHide, state}) => (
                    <UserButton type="submit" onClick={onShow}>
                      Kayıt Ol
                    </UserButton>
                  )}
                </Toast>
              </Form>
              <div className="mt-4" style={{display: !isCodeSent && 'none'}}>
                <p>E-Posta Adresinize gelen onay kodunu giriniz.</p>
                <Form className="mt-4" onSubmit={verifyEmail}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="Onay Kodu"
                      value={code}
                      onChange={({target: {value}}) => setCode(value)}
                    />
                  </Form.Group>

                  <Toast
                    title="Bilgilendirme!"
                    message="Kodunuz tekrar gönderildi. E-mailinizin diğer kutularını kontrol etmeyi unutmayınız."
                    color="info"
                  >
                    {({onShow, onHide, state}) => (
                      <div className="text-right resend">
                        <a
                          onClick={() => {
                            resendCode();
                            onShow();
                          }}
                        >
                          Kodu Tekrar Gönder
                        </a>
                      </div>
                    )}
                  </Toast>

                  <Toast message={toastMessage} color="error">
                    {({onShow, onHide, state}) => (
                      <UserButton
                        type="submit"
                        onClick={onShow}
                        className="mt-2"
                      >
                        Onayla
                      </UserButton>
                    )}
                  </Toast>
                </Form>
              </div>
            </Tab>
          </Tabs>
        </CustomModal.Body>
      </CustomModal>

      <Container>
        <CustomNavbar expand="lg" variant="dark">
          <Link href="/">
            <a>
              <Navbar.Brand>
                <Logo src="/assets/images/logo.png" alt="" />
              </Navbar.Brand>
            </a>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link href="/" passHref={true}>
                <NavLink>Anasayfa</NavLink>
              </Link>
              <Link href={'/etkinlikler'} passHref={true}>
                <NavLink>Etkinlikler</NavLink>
              </Link>
              <Link href="/blog" passHref={true}>
                <NavLink>Blog</NavLink>
              </Link>
              <Link href={'/takim'} passHref={true}>
                <NavLink>Takım</NavLink>
              </Link>

              {!Array.isArray(activeUser) && activeUser ? (
                <CustomDropdown>
                  <CustomDropdown.Toggle
                    className="shadow-none pl-0 pl-md-2"
                    id="dropdown-basic"
                  >
                    {activeUser.name} {activeUser.surname}
                  </CustomDropdown.Toggle>

                  <CustomDropdown.Menu>
                    <Link
                      href={`/[slug]`}
                      as={`/${activeUser.username}`}
                      passHref={true}
                    >
                      <CustomDropdown.Item>Hesabım</CustomDropdown.Item>
                    </Link>
                    <Link href="/topluluk" passHref={true}>
                      <CustomDropdown.Item>Topluluk</CustomDropdown.Item>
                    </Link>
                    <CustomDropdown.Item onClick={logoutOperation}>
                      Çıkış Yap
                    </CustomDropdown.Item>
                  </CustomDropdown.Menu>
                </CustomDropdown>
              ) : (
                <div className="d-flex">
                  {/* <Link href="/giris-yap" passHref={true}> */}
                  <CustomButton
                    className="btn"
                    id="supportButton"
                    onClick={handleShow}
                  >
                    Giriş Yap
                  </CustomButton>
                  {/* </Link> */}
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </CustomNavbar>
      </Container>
    </CustomHeader>
  );
}
