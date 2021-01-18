import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';

import CustomNavbar from '../../components/CustomNavbar';
import Footer from '../../components/Footer';

class Blog extends React.Component {
    render () {
        return (
            <div className="page blog d-flex flex-column">
                <Helmet>
                    <title>Positive Treinamentos - Disciplina Positiva</title>
                </Helmet>

                <CustomNavbar />
                <Container fluid className="flex-grow-1 flex-shrink-0">
                    <Row>
                        <Col>
                        <p>
                            Muito se tem falado sobre uma nova abordagem para a educação de nossos filhos, a Disciplina Positiva.
                            O que seria? Como podemos colocar em prática e o que ganhamos quando aplicamos em nossa vida?
                        </p>
                        <p>
                            Disciplina Positiva é uma abordagem desenvolvida pela Dra. Jane Nelsen, que se baseia em princípios não punitivos que ajudam as crianças, jovens e adultos a desenvolver cooperação, resolução de problemas, autodisciplina e responsabilidade. As ferramentas utilizadas são muito práticas e podem ser usadas no dia a dia em qualquer situação. Hoje já é aplicada com crianças, adolescentes, adultos, professores, escolas, empresas e está presente em mais de 60 países.                    
                        </p>
                        <p>
                            A Disciplina Positiva atua na aplicação do equilíbrio entre firmeza e gentileza, pois é percebido algumas dificuldades quando tendemos a ir mais para um lado ou outro.
                        </p>
                        <p>
                            A Disciplina Positiva possui os seguintes critérios:
                            <ul>
                                <li>Respeito mútuo;</li>
                                <li>Desenvolve senso de aceitação e importância;</li>
                                <li>É efetiva a longo prazo;</li>
                                <li>Ensina habilidades sociais e de vida;</li>
                                <li>Nos incentiva a descobrir capacidades e poder pessoal.</li>
                            </ul>    
                        </p>  
                        <p>
                            <b>Patrícia Carvalho</b><br />
                            Educadora para Pais, Professores, Escolas e Empresas em Disciplina Positiva pela Positive Discipline Association 
                        </p>          

                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Blog;