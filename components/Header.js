import React, {useState, useRef, useEffect} from 'react';
import {useSelector} from 'react-redux';

import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Button,
  Dropdown,
} from 'react-bootstrap';

import Link from 'next/link';

import styled, {css} from 'styled-components';
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

const CustomHeader = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1;
  transition: all 0.5s ease;
  &.BgColor {
    background: red;
  }
`;

const CustomNavbar = styled(Navbar)`
  padding-left: 0;
  padding-right: 0;

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
  button {
    font-size: 11pt;
    color: #fff !important;
    opacity: 0.9;
    background: none;
    border: none;
    padding: 8px;
  }
`;

export default function Header() {
  const [headerBgColor, setHeaderBgColor] = useState(false);
  const activeUser = useSelector((state) => state.userReducer);

  const handleScroll = () => {
    setHeaderBgColor(50 < window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  });

  return (
    <CustomHeader
      style={
        headerBgColor ? {background: '#253b4b', transition: 'all .5s ease'} : {}
      }
    >
      <Container>
        <CustomNavbar expand="lg" variant="dark">
          <Navbar.Brand href="/">
            <Logo src="/assets/images/logo.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link href="/" passHref={true}>
                <NavLink>Anasayfa</NavLink>
              </Link>
              <Link href={'/event'} as={'/etkinlikler'} passHref={true}>
                <NavLink>Etkinlikler</NavLink>
              </Link>
              <Link href="/blog" passHref={true}>
                <NavLink>Blog</NavLink>
              </Link>
              <Link href="/calismalarimiz" passHref={true}>
                <NavLink>Aramıza Katıl!</NavLink>
              </Link>
              <Link href="/iletisim" passHref={true}>
                <NavLink>İletişim</NavLink>
              </Link>
              {activeUser ? (
                <CustomDropdown onClick={() => console.log(activeUser)}>
                  <CustomDropdown.Toggle
                    className="shadow-none"
                    id="dropdown-basic"
                  >
                    {activeUser.name} {activeUser.surname}
                  </CustomDropdown.Toggle>

                  <CustomDropdown.Menu>
                    <Link href="/profile" as="/hesabım" passHref={true}>
                      <CustomDropdown.Item>Hesabım</CustomDropdown.Item>
                    </Link>
                    <CustomDropdown.Item href="#/action-2">
                      Çıkış Yap
                    </CustomDropdown.Item>
                  </CustomDropdown.Menu>
                </CustomDropdown>
              ) : (
                <div className="d-flex" onClick={() => console.log(activeUser)}>
                  <Link href="/login" as="/giris-yap" passHref={true}>
                    <CustomButton className="btn" id="supportButton">
                      Giriş Yap
                    </CustomButton>
                  </Link>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </CustomNavbar>
      </Container>
    </CustomHeader>
  );
}
