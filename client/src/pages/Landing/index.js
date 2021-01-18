import React from "react";

import Navbar from '../../components/CustomNavbar';
import LandingHero from '../../sections/LandingHero';
import WeBelieve from '../../sections/WeBelieve';
import OurStory from '../../sections/OurStory';
import AboutUs from "../../sections/AboutUs";
import LearnTogether from "../../sections/LearnTogether";
import Schedule from "../../sections/NextEvents";
import Footer from "../../components/Footer";

import './styles.css';

const Landing = () => (
	<div id="landing-page" className="landing-page">
		<Navbar shrink />
		<LandingHero />
		<WeBelieve />
		<Schedule />
		<OurStory />
		<AboutUs />
		<LearnTogether />
		<Footer />
	</div>
);

export default Landing;