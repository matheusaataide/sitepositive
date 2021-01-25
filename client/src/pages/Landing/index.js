import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import htmlParser from 'react-html-parser';

import Navbar from '../../components/CustomNavbar';
import WeBelieve from '../../sections/WeBelieve';
import OurStory from '../../sections/OurStory';
import AboutUs from "../../sections/AboutUs";
import LearnTogether from "../../sections/LearnTogether";
import Schedule from "../../sections/NextEvents";
import ContactUs from "../../sections/ContactUs";
import Footer from "../../components/Footer";

import './styles.css';
import baseURL from "../../util/baseUrl";
import axios from "axios";

const Landing = () => {
	const [hero, setHero] = useState({
		title: '',
		content: '',
		image: ''
	});

	useEffect(() => {
		const loadHero = async () => {
			const image = await axios.get(`${baseURL}/api/sections/intro/img`);
			const title = await axios.get(`${baseURL}/api/sections/intro/title`);
			const content = await axios.get(`${baseURL}/api/sections/intro/text`);

			const data = { 
				title: title.data[0].value,
				image: image.data[0].value,
				content: content.data[0].value 
			};

			setHero(data);
		};

		loadHero();
	}, []);


	return (
	<div id="landing-page" className="page landing-page">
		<Navbar shrink />

		<header id="header" className="header">
			<div className="header-content">
				<Container>
					<Row>
						<Col sm={12} lg={6}>
							<div className="text-container">
								<h1>{ htmlParser(hero.title) }</h1>
								<div className="text">{ htmlParser(hero.content) }</div>
							</div>
						</Col>
						<Col sm={12} lg={6}>
							<div className="image-container">
								<Image fluid 
									src={`${baseURL}/uploads/${hero.image}`} 
									alt="Família Positive" />
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</header>

		<WeBelieve />
		
		<Row>
			<Col>
				<h2 className="section-title">Próximos eventos</h2>
			</Col>
		</Row>
		<Schedule />
		
		<OurStory />
		<AboutUs />
		<LearnTogether />
		<div className="bg-primary">
			
		<ContactUs />
		</div>
		<Footer />
	</div>
	);
}

export default Landing;