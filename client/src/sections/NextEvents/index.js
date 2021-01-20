import React from 'react';
import axios from 'axios'; 
import { Container, Row, Col } from 'react-bootstrap';

import CourseCard from '../../components/CourseCard';

import './styles.css';

export default class NextEvents extends React.Component {
    constructor (props) {
        super(props);

        this.state = { 
            courses: [],
            limit: props.limit || 3, 
            offset: props.offset || 0 
        };
    }

    componentDidMount () {
        axios.get('/courses')
            .then(res => {
                const courses = res.data;
                this.setState({ courses });
            }); 
    }

    render () {
        const { courses } = this.state;

        return (
            <section className="page-section schedule" id="schedule">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="section-title">Próximos eventos</h2>
                        </Col>
                    </Row>
                    <Row className={`has-${courses.length}`}>
                    { 
                        courses.map(course => {
                            return (
                                <Col key={ course.id }>
                                    <CourseCard course={course} />
                                </Col>
                            );
                        })
                    }
                    </Row>
                </Container>
            </section>
        );
    }
}