import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Container, Row, Col, Image } from 'react-bootstrap';
import TimeAgo from 'react-time-ago';
import parseHtml from 'react-html-parser';

import CustomNavbar from '../../components/CustomNavbar';
import Footer from '../../components/Footer';
import baseURL from '../../util/baseUrl';

import './styles.css';

class BlogPost extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            post: {
                id: 0,
                title: "",
                content: "",
                status: true,
                img: "",
                createdAt: new Date().getTime()
            }
        }
    }

    componentDidMount () {
        const { match: { params }} = this.props;
        
        axios.get(`/posts/${params.postId}`)
            .then(res => {
                const post = res.data;
                this.setState({ post });
            }); 
    }

    render () {
        const { post } = this.state;
        return (
            <div className="page blog-post d-flex flex-column">
                <Helmet>
                    <title>Positive Treinamentos - Blog - {post.title}</title>
                </Helmet>

                <CustomNavbar />
                <Container className="content flex-grow-1 flex-shrink-0">
                    <Row>
                        <Col lg={{ span: 10, offset: 1}}>
                            <Image rounded 
                                    src={`${baseURL}/${post.img}`} alt={post.title} />
                        
                            <h2 className="section-subtitle">Artigo</h2>
                            <h1 className="section-title">{ post.title }</h1>
                            <div className="lead">
                                <span>por <Link to="/quem-somos">Positive Treinamentos</Link></span>
                                <span><TimeAgo date={ new Date(post.createdAt) } timeStyle="round"/></span>
                                <hr />
                            </div>
                            <div>
                                { parseHtml(post.content)}
                            </div>                          
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default BlogPost;