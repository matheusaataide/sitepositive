import React from 'react';
import { Container } from 'react-bootstrap';
import AboutUs from '../../components/AboutUs';
import Footer from '../../components/Footer';
import History from '../../components/OurHistory';
import Navbar from '../../components/CustomNavbar';

import './styles.css';

const WhoWeAre = () => (
    <div className="page who-we-are d-flex flex-column">
        <Navbar />
        <Container fluid className="flex-grow-1 flex-shrink-0">
            <AboutUs />
            <History />
        </Container>
        <Footer />
    </div>
);

export default WhoWeAre; 