import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import htmlParser from 'react-html-parser';
import { Container, Row, Col, Image } from 'react-bootstrap';

import baseURL from '../../util/baseUrl';
import './styles.css';

class WeBelieve extends React.Component {
	constructor (props) {
        super(props);

        this.state = {
			img: '', 
			title: '',
            text: ''
        };
    }

    componentDidMount () {
        axios.get(`${baseURL}/api/sections/we-believe/img`)
            .then(res => {
				const infos = res.data;

                this.setState({ 
					...this.state,
					img: _.head(infos).value
				 });
			}); 
		axios.get(`${baseURL}/api/sections/we-believe/text`)
            .then(res => {
				const infos = res.data;

                this.setState({ 
					...this.state,
					text: _.head(infos).value
				 });
			});
		axios.get(`${baseURL}/api/sections/we-believe/title`)
            .then(res => {
				const infos = res.data;

                this.setState({ 
					...this.state,
					title: _.head(infos).value
				 });
            });
    }

	render() {
		const { img, title, text } = this.state; 

		return (
		<section className="page-section we-believe" id="we-believe">
			<Container>
				<Row>
					<Col xs={12} lg={6}>
						<div className="image-absolute-box">
							<div className="box wow fadeInUp">
								<div className="icon-wrap"><span className="flaticon-vector"></span></div>
								
							</div>
							<Image fluid src={img} alt={title} />
						</div>
					</Col>
					<Col xs={12} lg={6}>
						<div className="mb-5">
							<span className="section-subtitle d-block">No que acreditamos</span>
							<h2 className="section-title">{title}</h2>
							{ htmlParser(text) }	
						</div>					
					</Col>
				</Row>
			</Container>
        </section>
		);
	}
};

export default WeBelieve;