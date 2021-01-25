import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Container, Row, Col, Image } from 'react-bootstrap';
import TimeAgo from 'react-time-ago';
import parseHtml from 'react-html-parser';
import slugify from 'slugify';

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
            }, 
            previous: {
                id: 0,
                title: "",
                content: "",
                status: true,
                img: "",
                createdAt: new Date().getTime()
            },
            next: {
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
        
        let postId = parseInt(params.postId);
        let prv = postId > 4 ? (postId - 1) : 0;
        let nxt = postId < 6 ? (postId + 1) : 0; 
        
        axios.get(`${baseURL}/api/posts/${params.postId}`)
            .then(res => {
                const post = res.data;
                this.setState({ ...this.state, post });
            }); 

        if (prv !== 0)
            axios.get(`${baseURL}/api/posts/${prv}`)
                .then(res => {
                    const prevPost = res.data;
                    this.setState({ ...this.state, previous: prevPost });
                }); 
        
        if (nxt !== 0)
            axios.get(`${baseURL}/api/posts/${nxt}`)
                .then(res => {
                    const nextPost = res.data;
                    this.setState({ ...this.state, next: nextPost });
                }); 
    }

    render () {
        const { post, previous, next } = this.state;
        const date = new Date(post.createdAt);

        console.log (next)
        return (
            <div className="page post d-flex flex-column">
                <Helmet>
                    <title>Positive Treinamentos - Blog - {post.title}</title>
                </Helmet>

                <CustomNavbar shrink />
                <Container className="content flex-grow-1 flex-shrink-0">
                <Row>
                        <Col style={{ textAlign: 'justify' }}>
                            <h2 className="page-subtitle">Artigo</h2>
                            <h1 className="page-title">{post.title}</h1>
                            <div className="info">
                                Por Positive Treinamentos, <TimeAgo date={date} timeStyle="round"/>
                            </div>
                            
                            <Image fluid
                                className="post-image"
                                src={`${baseURL}/uploads/${post.img}`} 
                                alt={post.title} />
                            <div>{ parseHtml(post.content) }</div>           
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '3em' }}>
                    <hr />
                    <div className="clearfix" style={{width: '100%'}}>
                        <Link 
                            className={`btn btn-primary float-left ${previous.id === 0 ? 'd-none' : ''}`}
                            to={`/blog/${previous.id}/${slugify(previous.title).toLowerCase()}`}>
                                <i className="fas fa-chevron-left"></i> <span className="d-none d-md-inline">Artigo</span> Anterior 
                        </Link>
                        <Link 
                            className={`btn btn-primary float-right ${next.id === 0 ? 'd-none' : ''}`}
                            to={`/blog/${next.id}/${slugify(next.title).toLowerCase()}`}>
                                Próximo <span className="d-none d-md-inline">Artigo</span> <i className="fas fa-chevron-right"></i> 
                        </Link>
                    </div>
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default BlogPost;