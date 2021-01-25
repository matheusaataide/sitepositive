import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Image } from 'react-bootstrap';
import CustomNavbar from '../../components/CustomNavbar';
import ProfileCard from '../../components/ProfileCard';
import BackToTopButton from '../../components/BackToTopButton';
import Footer from '../../components/Footer';
import baseURL from '../../util/baseUrl';
import './styles.css';

const WhoWeAre = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const loadUsers = async () => {
            const list = await axios.get(`${baseURL}/api/users`);
            setUsers(list.data);
        }    
        loadUsers();
    }, []);

    return (
    <div id="top" className="page who-we-are d-flex flex-column">
        <Helmet>
            <title>Positive Treinamentos - Quem somos</title>
        </Helmet>

        <CustomNavbar shrink />
        <Container className="flex-grow-1 flex-shrink-0">
            <Row>
                <Col style={{ textAlign: 'justify' }}>
                    <h1 className="page-title">Quem somos nós</h1>
                    <Image 
                        className="img-hero"
                        src={`${baseURL}/uploads/rafael-e-patricia.jpg`} 
                        alt="Rafael e Patrícia" />
                    <div class="content">
                        <p>
                            A Positive Treinamentos surgiu com  ideias do casal Rafael e Patrícia, que,
                            por possuírem seus maiores valores voltados para a Família, oferecem
                            um trabalho de desenvolvimento pessoal com pais, casais, jovens e escolas.
                        </p>
                        <p>
                            Sempre trabalhando na área empresarial, percebemos a necessidade que
                            muitas pessoas possuem de melhorar o seu relacionamento familiar, 
                            onde muitas vezes, por estarem em conflitos com família, 
                            dificuldade de lidar com filhos, escola, profissionais muito bons
                            e competentes não conseguiam ser produtivos e não desempenhavam 
                            seus papéis como gostariam.
                        </p>
                        <p>
                            Entendemos a necessidade de nos atualizarmos sempre no âmbito profissional 
                            e acreditamos que a família é a base para nossa vida e nosso relacionamento,
                            com isso precisamos estar conectados, em harmonia e realizados no segmento familiar 
                            para estarmos mais preparados e termos sucessos nos negócios.
                        </p>
                        <p>
                            A escola é a segunda casa de nossos filhos e é imprescindível que ela
                            seja um ambiente agradável, respeitoso e encorajador, além de ser responsável 
                            pela educação e produção de conhecimentos que levarão as crianças e jovens 
                            para a preparação profissional e para a vida.
                        </p>
                    </div>      
                </Col>
            </Row>
            <section className="page-section">
                <Row>
                    <h2 className="section-title">Estamos prontos para te ajudar</h2>
                </Row>
                <Row>
                    { users.map((user, index) => (
                        <Col key={index}
                            xs={12}
                            lg={{ span: 5, offset: index === 0 ? 1 : 0 }}>
                            <ProfileCard user={user} />
                        </Col>
                    ))}
                </Row>
            </section>
            <BackToTopButton />
        </Container>
        <Footer />
    </div>
    );
}

export default WhoWeAre;