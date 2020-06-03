import React, {useState, useEffect} from 'react';
import Layout from '../../components/Layout';
import PageTopSide from '../../components/PageTopSide';
import styled from 'styled-components';
import {
  Container,
  Row,
  Col,
  Tabs,
  Tab,
  Form,
  Button,
  Toast,
} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {register, login} from '../../redux/actions/user';
import confirmCode from '../../api/user/confirmCode';
import emailVerification from '../../api/user/emailVerification';
import {useRouter} from 'next/router';

const LoginArea = styled.div`
  padding: 50px 0;
  .text-muted {
    padding-left: 2px;
  }
  .tabsArea {
    display: flex;
    justify-content: center;
  }
  .tabsArea .nav-tabs a {
    color: rgb(37, 59, 75);
    font-weight: 400;
    width: 50%;
    border-radius: 0;
  }
  .tabsArea .nav-tabs a:hover {
    border-color: transparent;
  }
  .tabsArea .nav-tabs a:focus {
    outline: none;
  }
  .tabsArea .nav-tabs {
    border-radius: 5px;
    overflow: hidden;
  }
  .tabsArea .nav-tabs .nav-link.active {
    color: white;
    background: #0097e4;
  }
  .tabs-area .nav-link {
    width: 50%;
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

  .resend a {
    color: #0097e4;
    cursor: pointer;
    font-size: 10pt;
  }
`;

const CustomButton = styled(Button)`
  font-size: 11pt;
  color: #fff !important;
  border-radius: 5px;
  padding-left: 20px;
  padding-right: 20px;
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

export default function Login() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [code, setCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [show, setShow] = useState(false);

  const activeUser = useSelector((state) => state.userReducer);
  const router = useRouter();
  const dispatch = useDispatch();

  /* ABÇ: TEMP AUTH */
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token && activeUser) router.push('/');
  }, []);

  const resendCode = () => {
    sendConfirmCode();
    setShow(true);
  };

  const sendConfirmCode = async (e) => {
    try{
      e.preventDefault();
    }catch(error){
      // do not do anything
    }

    if (!name || !surname || !email || !password || !passwordAgain) return; // credentials can not be empty

    if (password !== passwordAgain) return; // password should be matched

    try {
      const res = await confirmCode(email);
      localStorage.setItem('email-code', res);
      setIsCodeSent(true);
    } catch ({response: {data}}) {
      console.log(data); // something went wrong, show the data (message) to user
    }
  };

  const verifyEmail = async (e) => {
    e.preventDefault();
    if (!code) return; // code field can not be empty
    try {
      const res = await emailVerification(
        code,
        localStorage.getItem('email-code')
      );
      dispatch(register(name, surname, email, password));
      //dispatch(login(email, password));
      router.push('/');
    } catch ({response: {data}}) {
      console.log(data); // something went wrong, show the data (message) to user
    }
  };

  const loginOperation = async (e) => {
    e.preventDefault();

    try {
      dispatch(login(email, password));
      router.push('/');
    } catch ({response: {data}}) {
      console.log(data); // something went wrong, show the data (message) to user
    }
  };

  return (
    <Layout>
      <Toast
        style={{
          position: 'fixed',
          zIndex: 5,
          top: 20,
          right: 20,
        }}
        onClose={() => setShow(false)}
        show={show}
        delay={2000}
        autohide
      >
        <Toast.Header
          style={{
            background: '#0097e4',
            color: 'white',
          }}
        >
          <strong className="mr-auto">Hatırlatma!</strong>
        </Toast.Header>
        <Toast.Body>
          Onay kodu tekrar gönderildi. E-Postanızın diğer kutularını kontrol etmeyi unutmayınız!
        </Toast.Body>
      </Toast>
      <PageTopSide
        responsiveTop="40"
        responsiveHeight="300"
        bgImage="./../assets/images/homeBg.jpg"
        defaultHeight="250"
        title="Giriş Yap"
        desc="Topluluğumuzun avantajlarından faydalanmak için sistemimize giriş yapabilirsiniz."
      />

      <LoginArea>
        <Container>
          <Row className="tabsArea">
            <Col xs={12} md={8} lg={4}>
              <Row>
                <Col xs={12} style={{display: isCodeSent && 'none'}}>
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

                        <CustomButton type="submit">Giriş Yap</CustomButton>
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
                            onChange={({target: {value}}) =>
                              setPasswordAgain(value)
                            }
                          />
                          <Form.Text className="text-muted">
                            Kullanıcı sözleşmelerimiz hazırlanmaktadır. Hazırlık
                            aşaması bittikten sonra belirttiğiniz E-Posta
                            adresine onay maili ve sözleşmeler iletilecektir.
                          </Form.Text>
                        </Form.Group>
                        {/* <Form.Group controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Kullanım Koşulları'nı okudum ve kabul ediyorum." />
                                                </Form.Group> */}

                        <CustomButton type="submit" className="mt-3">
                          Kayıt Ol
                        </CustomButton>
                      </Form>
                    </Tab>
                  </Tabs>
                </Col>
                <Col xs={12} style={{display: !isCodeSent && 'none'}}>
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
                    <div className="text-right resend">
                      <a onClick={resendCode}>Kodu Tekrar Gönder</a>
                    </div>
                    <CustomButton type="submit" className="mt-2">
                      Onayla
                    </CustomButton>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </LoginArea>
    </Layout>
  );
}
