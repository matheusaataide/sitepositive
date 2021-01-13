import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

import './styles.css';
import RafaelProfilePic from '../../assets/img/photos/rafael.jpg';
import PatriciaProfilePic from '../../assets/img/photos/patricia.jpg';
// import PatriciaCartoon from '../../assets/img/caricaturas/patricia.png';

const AboutUs = () => {
    return <section className="page-section about-us" id="about-us">
        <Container>
            <Row>
                <div className="col-lg-8 text-center mb-5 mx-auto">
                    <h2 className="section-title">Quem somos nós</h2>
                </div>
            </Row>
            <Row>
                <Col xs={12} lg={{ span: 4, offset: 2 }}>
                    <Card>
                        <Card.Body>
                            <Image src={RafaelProfilePic} alt="Rafael Barbosa" roundedCircle fluid />
                            <Card.Title>Rafael Barbosa</Card.Title>
                            <hr className="cell-divide-hr" />
                            <ul className="list-unstyled li-space-lg">
                                <li>Esposo da Patrícia;</li>
                                <li>Pai da Alícia e da Lavínia;</li>
                                <li>Administrador de Empresas com MBA em Gestão Comercial e Inteligência de Mercado;</li>
                                <li>Practitioner em Programação Neurolinguística;</li>
                                <li>Professional & Self Coach;</li>
                                <li>Treinador Comportamental; </li>
                                <li>Especialista em Inteligência Emocional (SBIE); </li>
                                <li>MBA Executivo em Gestão Comercial & Inteligência de Mercado. (IPOG).</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} lg={4}>
                    <Card>
                        <Card.Body>
                            <img src={PatriciaProfilePic} alt="Patrícia Carvalho" className="img-fluid rounded-circle" />
                            <Card.Title>Patrícia Carvalho</Card.Title>

                            <hr className="cell-divide-hr" />

                            <ul className="list-unstyled li-space-lg">
                                <li>Esposa do Rafael;</li>
                                <li>Mãe da Alícia e da Lavínia;</li>
                                <li>Administradora de Empresas com MBA em Gestão Empresarial, Gestão de Projetos, Finanças Corporativas e Gestão de Pessoas com Coaching;</li>
                                <li>Master Practitioner em Programação Neurolinguística (INEXH);</li>
                                <li>Consteladora Sistêmica Integrativa (IBC);</li>
                                <li>Treinadora Comportamental (IFT);</li>
                                <li>Master Coach (IBC) para Pais, Adolescentes e Escolar (Parent Coaching);</li>
                                <li>Especialista em Inteligência Emocional (SBIE);</li>
                                <li>Educadora para Pais, Professores, Escolas e Empresas em Disciplina Positiva pela PDA (USA);</li>
                                <li>Consultora em Encorajamento (Lynn Lott).</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>;
};

export default AboutUs;