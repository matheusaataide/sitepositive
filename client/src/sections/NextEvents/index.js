import React from 'react';
import axios from 'axios'; 
import { Container, Row, Col } from 'react-bootstrap';



import './styles.css';
import CourseCard from '../../components/CourseCard';
import baseURL from '../../util/baseUrl';

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
        axios.get(`${baseURL}/api/courses`)
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
                    <Row className={`has-${courses.length}` }>
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