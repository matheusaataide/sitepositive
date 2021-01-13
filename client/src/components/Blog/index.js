import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'; 
import api from '../../services/api';

import './styles.css';
import BlogImage1 from '../../assets/img/posts/post1.png';
import BlogImage2 from '../../assets/img/posts/post2.jpeg';
import BlogImage3 from '../../assets/img/posts/post3.jpeg';

export default class Blog extends React.Component {
    state = {
        posts: []
    };

    render() {
        return <section className="blog">
            <Container>
                <Row>
                    <div className="col-lg-8 text-center mb-5 mx-auto">
                        <h2 className="section-title">Vamos aprender juntos?</h2>
                    </div>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Img src={BlogImage1} variant="top" alt="alternative" />
                            <Card.Body>
                                <p>Perfect for fresh ideas or young startups, this package will help get the business off the ground</p>
                            </Card.Body>
                            <div className="button-container">
                                <Button href="#callMe">Ler mais</Button>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img src={BlogImage2} variant="top" alt="alternative" />
                            <Card.Body>
                                <p>Perfect for fresh ideas or young startups, this package will help get the business off the ground</p>
                            </Card.Body>
                            <div className="button-container">
                                <Button href="#callMe">Ler mais</Button>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img src={BlogImage3} variant="top" alt="alternative" />
                            <Card.Body>
                                <p>Perfect for fresh ideas or young startups, this package will help get the business off the ground</p>
                            </Card.Body>
                            <div className="button-container">
                                <Button href="#callMe">Ler mais</Button>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>;
    }
};