import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'; 
import api from '../../services/api';

import './styles.css';
import BlogImage1 from '../../assets/img/posts/post1.png';
import BlogImage2 from '../../assets/img/posts/post2.jpeg';
import BlogImage3 from '../../assets/img/posts/post3.jpeg';

export default class Posts extends React.Component {
    constructor (props) {
        super(props);

        this.state = { 
            posts: [],
            limit: props.limit || 3, 
            offset: props.offset || 0 
        };
    }

    componentDidMount () {
        api.get(`posts?limit=${this.state.limit}&offset=${this.state.offset}`)
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
            }); 
    }

    render() {
        return <section className="page-section posts">
            <Container>
                <Row>
                    <div className="col-lg-8 text-center mb-5 mx-auto">
                        <h2 className="section-title">Vamos aprender juntos?</h2>
                    </div>
                </Row>
                <Row>
                    { this.state.posts.map(course => (
                        <Col key={course.id}>
                            <Card>
                                <Card.Img src={`./img/posts/${course.img}`} variant="top" alt={course.title} />
                                <Card.Body>
                                    <p>{course.content}</p>
                                </Card.Body>
                                <div className="button-container">
                                    <Link className="btn btn-primary" to="/post1">Ler mais</Link>
                                </div>
                            </Card>
                        </Col>
                    )) }
                </Row>
            </Container>
        </section>;
    }
};