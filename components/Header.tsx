import React, { useState, useRef, useEffect } from 'react'

import { Navbar, Nav, NavDropdown, Container, Button, Dropdown } from 'react-bootstrap';

import Link from 'next/link'

import styled, { css } from 'styled-components'
const Logo = styled.img`
    width:150px;
`;

const NavLink = styled(Nav.Link)`

    font-size: 11pt;
    color: #fff !important;
    opacity: .9;
    transition: all .3s ease;
    &:hover{
        opacity:1;
        transition: all .3s ease;
    }
`;
const CustomButton = styled.a`
    font-size: 11pt;
    color: #fff !important;
    border-radius: 20px;
    padding-left:  20px;
    padding-right:  20px;

    background:#0097e4;
    border:none;
    margin-left: 5px;
    display: flex;
    align-items: center;
    transition: all .3s ease;
    &:hover {
        background:#019eef;
        border-color:#019eef;

        transition: all .3s ease;
    }

    @media(max-width:991px){
        margin: 10px 0;
    }
`;


const BgHeader = `
background:Red;
`;

const CustomHeader = styled.header`
position:fixed;
left:0;
right:0;
z-index:1;
transition:all .5s ease;
&.BgColor{
    background:red;
}
`;

const CustomNavbar = styled(Navbar)`
padding-left: 0;
padding-right: 0;

@media(max-width:991px){
    .navbar-collapse{
        background: rgb(37, 59, 75);
        padding: 10px 10px;
        border-radius: 5px;
    }
    
}
`;

export default function Header() {

    const [headerBgColor, setHeaderBgColor] = useState(false);


    const handleScroll = () => {

        setHeaderBgColor(100 < window.pageYOffset );
  
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', () => handleScroll);
        };
    })

    return (
        <CustomHeader style={headerBgColor ? {background:"#253b4b",transition:"all .5s ease"} : {}} >
            <Container>
                <CustomNavbar expand="lg" variant="dark">

                    {<Navbar.Brand href="#home"><Logo src="/assets/images/logo.png" alt="" /></Navbar.Brand>}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link href="/">
                                <NavLink >Anasayfa</NavLink>
                            </Link>
                            <Link href="/about">
                                <NavLink >Etkinlikler</NavLink>
                            </Link>
                            <Link href="/iletisim">
                            <NavLink >Yazılarımız</NavLink>
                            </Link>
                            <Link href="/calismalarımız">
                            <NavLink>Aramıza Katıl!</NavLink>
                            </Link> 
                            <Link href="/iletisim">
                            <NavLink >İletişim</NavLink>
                            </Link>
                            
                            
                            <div className="d-flex">
                                <CustomButton className="btn" id="supportButton">Destek Ol</CustomButton>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </CustomNavbar>
            </Container>
        </CustomHeader>
    )
}
