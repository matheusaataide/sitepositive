import React from 'react';
import { Navbar, Nav, OverlayTrigger, Tooltip, Container } from 'react-bootstrap';

import './styles.css';
import Logo from '../../assets/img//logo/logo.png';

class CustomNavbar extends React.Component {
    listener = null;

    state = {
        nav: false
    };

    render () {
        return (
        <Navbar bg="light" expand="lg" fixed="top" className="transparent">
            <Container fluid>
                <Navbar.Brand href="#home"><img src={Logo} alt="Positive Treinamentos" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-first"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Início</Nav.Link>
                        <Nav.Link href="/quem-somos">Quem somos</Nav.Link>
                        <Nav.Link href="/transformacoes-positive">Transformações Positive</Nav.Link>
                        <Nav.Link href="/agenda">Agenda</Nav.Link>
                        <Nav.Link href="/disciplina-positiva">Disciplina Positiva</Nav.Link>
                        <Nav.Link href="/depoimentos" className="d-none">Depoimentos</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link href="/contato">Contato</Nav.Link>
                    </Nav>
                    <Nav className="d-none">
                        <OverlayTrigger
                            placement={"bottom"}
                            overlay={ <Tooltip id={"whatsapp"}>+55 82 99939 5433</Tooltip> }
                        >
                            <Nav.Link href="https://api.whatsapp.com/send?phone=5582999395433" className="social-media">
                                <i className="fab fa-whatsapp-square fa-2x"></i>
                            </Nav.Link>
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement={"bottom"}
                            overlay={ <Tooltip id={"instagram"}>@positivetreinamentos</Tooltip> }
                        >
                            <Nav.Link href="https://www.instagram.com/positivetreinamentos/" className="social-media">
                                <i className="fab fa-instagram-square fa-2x"></i>
                            </Nav.Link>
                        </OverlayTrigger>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>);
    }
};

export default CustomNavbar;