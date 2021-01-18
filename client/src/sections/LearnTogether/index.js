import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import axios from 'axios';

import './styles.css';
import PostCard from '../../components/PostCard';

export default class LearnTogether extends React.Component {
    constructor (props) {
        super(props);

        this.state = { 
            posts: [],
            limit: props.limit || 3, 
            offset: props.offset || 0 
        };
    }

    componentDidMount () {
        axios.get(`/posts?limit=${this.state.limit}&offset=${this.state.offset}`)
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
            }); 
    }

    render() {
        const posts = this.state.posts;
        
        return <section className="page-section learn-together">
            <Container>
                <Row>
                    <Col>
                        <h2 className="section-title">Vamos aprender juntos?</h2>
                    </Col>
                </Row>
                <Row>
                    { posts.map(post => (
                        <Col key={post.id} >
                            <PostCard post={post} />
                        </Col>
                    )) }
                </Row>
            </Container>
        </section>;
    }
};