import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { format, parseISO } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import TimeAgo from 'react-time-ago';
import parseHtml from 'react-html-parser';


import CustomNavbar from '../../components/CustomNavbar';
import Footer from '../../components/Footer';
import baseURL from '../../util/baseUrl';

import './styles.css';

class Course extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            course: {
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
        
        axios.get(`${baseURL}/api/courses/${params.courseId}`)
            .then(res => {
                const course = res.data;
                this.setState({ course });
            }); 
    }

    render () {
        const { course } = this.state;
        return (
            <div className="page course d-flex flex-column">
                <Helmet>
                    <title>Positive Treinamentos - {course.title}</title>
                </Helmet>

                <CustomNavbar />
                <Container className="content flex-grow-1 flex-shrink-0">
                <Row>
                        <Col style={{ textAlign: 'justify' }}>
                            <h1 className="page-title">Disciplina Positiva</h1>
                            <p className="lead">
                                <span>Por <Link to="/quem-somos" style={{
                                    fontWeight: 'bold',
                                    color: '#2ba2cc'
                                }}>Patrícia Carvalho</Link></span>
                            </p>
                            <p>
                            <i className="fas fa-map-marker-alt" style={{ marginRight: '.65em', color: '#2ba2cc' }}></i> 
                                <span>{ course.local }</span>
                            </p>
                            <p>
                                <i className="fas fa-calendar" style={{ marginRight: '.65em', color: '#2ba2cc' }}></i> 
                                <span>{ format(
                                            parseISO(course.date),
                                            "dd' 'MMM', às 'HH:mm'h'",
                                            { locale: ptBr })
                                        }</span>
                            </p>
                            <Image 
                                src={`${baseURL}/uploads/${course.img}`} 
                                alt={course.title}
                                style={{
                                    maxWidth: '50%',
                                    float: 'right',
                                    marginLeft: '3.2em',
                                    marginBottom: '1.5em'
                                }} />
                            <div>{ parseHtml(course.content) }</div>           
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ span: 10, offset: 1}}>
                            <Image rounded 
                                    src={`${baseURL}/uploads/${course.img}`} alt={course.title} />
                        
                            <h2 className="section-subtitle">Artigo</h2>
                            <h1 className="section-title">{ course.title }</h1>
                            <p className="lead">
                                <span>por <Link to="/quem-somos">Positive Treinamentos</Link></span>
                                <span><TimeAgo date={ new Date(course.createdAt) } timeStyle="round"/></span>
                                <hr />
                            </p>
                            <div>
                                { parseHtml(course.content)}
                            </div>                          
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Course;