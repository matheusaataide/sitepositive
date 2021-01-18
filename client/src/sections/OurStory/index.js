import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import htmlParser from 'react-html-parser';
import { Container, Row, Col, Image } from 'react-bootstrap';

import './styles.css';
import ImageCartoonRafael from "../../assets/img/caricaturas/rafael.png";


class OurStory extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    componentDidMount () {
        axios.get('/sections/our-story/text')
            .then(res => {
				const infos = res.data;

                this.setState({ 
					...this.state,
					text: _.head(infos).value
				 });
            }); 
    }

    render() {
        const { text } = this.state;
         
        return (
        <section className="page-section our-story" id="our-story">
            <Container>
                <Row>
                    <Col xs={12} lg={6}>
                        <Image className="img-fluid cartoon" 
                            src={ImageCartoonRafael}
                            alt="Caricatura de Rafael" />
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className="text-center h-100">
                            <div className="d-flex h-100">
                                <div className="transform-text w-100 text-center text-lg-left">
                                    <h2 className="section-title">Nossa história</h2>
                                    <div className="content">{ htmlParser(text) }</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        );
    }
}

export default OurStory;