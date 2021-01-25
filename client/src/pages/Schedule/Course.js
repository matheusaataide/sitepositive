import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { format, parseISO } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
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
                date: "2021-03-13 17:30:07"
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

                <CustomNavbar shrink />
                <Container className="content flex-grow-1 flex-shrink-0">
                <Row>
                        <Col style={{ textAlign: 'justify' }}>
                            <h2 className="page-subtitle">Evento</h2>
                            <h1 className="page-title">{course.title}</h1>
                            <ul className="info">
                                <li><i className="fas fa-map-marker-alt" style={{ marginRight: '.65em', color: '#2ba2cc' }}></i> 
                                <span>{ course.local }</span></li>
                                <li><i className="fas fa-calendar" style={{ marginRight: '.65em', color: '#2ba2cc' }}></i> 
                                <span>{ format(
                                            parseISO(course.date),
                                            "dd' 'MMM', às 'HH:mm'h'",
                                            { locale: ptBr })
                                        }</span></li>
                            </ul>
                            
                            <Image fluid
                                className="course-image"
                                src={`${baseURL}/uploads/${course.img}`} 
                                alt={course.title} />
                            <div>{ parseHtml(course.content) }</div>           
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'center'}}>
                            <div className="cta">
                                <a 
                                    className="btn btn-primary"
                                    href="https://docs.google.com/forms/d/e/1FAIpQLScJyArpCdpOgPmvMkGGqRCwQ8aFPQNxwb_P_DmifoFF9h-CSA/viewform"
                                    alt="Formulário de inscrição">
                                    Inscrever-me        
                                </a> 
                                <a 
                                    className="btn btn-link"
                                    href="https://api.whatsapp.com/send?phone=5582999395433&text=Ol%C3%A1!%20Vi%20um%20evento%20no%20seu%20site,%20e%20queria%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20ele!%20%F0%9F%98%81%F0%9F%92%99"
                                    alt="Falar no whatsapp">
                                    Fale conosco! <i className="fab fa-whatsapp" style={{marginLeft: '.5em'}}></i>        
                                </a> 
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