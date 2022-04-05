import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
// @ts-ignore
import NavbarLogo from "../../images/logo.png";
// @ts-ignore
import girlLogo from "../../images/girlImg.png";

const Header = () => {
    return (
        <Container>
            <Navbar expand="lg">
                <Navbar.Brand> <NavLink to={'/'}> <img className={'main_logo'} src={NavbarLogo} alt="logo" /> </NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className={'justify-content-end'}>
                    <Nav className="mr-auto">
                         <NavLink to={'/'}> Home </NavLink>
                         <NavLink to={'/reservation'}> Reservations </NavLink>
                         <NavLink to={'/listings'}> My Listings </NavLink>
                         <NavLink to={'/message'}> Messages </NavLink>
                        <img className={'girl_img'} src={girlLogo} alt="logo" />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;
