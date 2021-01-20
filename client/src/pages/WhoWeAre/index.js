import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';

import CustomNavbar from '../../components/CustomNavbar';
import AboutUs from '../../sections/AboutUs';
import OurStory from '../../sections/OurStory';
import WeBelieve from '../../sections/WeBelieve';
import Footer from '../../components/Footer';

import './styles.css';

class WhoWeAre extends React.Component {
    render () {
        return (
            <div className="page who-we-are d-flex flex-column">
                <Helmet>
                    <title>Positive Treinamentos - Quem somos</title>
                </Helmet>

                <CustomNavbar shrink />
                <Container fluid className="flex-grow-1 flex-shrink-0">
                    <CustomNavbar />
                    <AboutUs/>
                    <OurStory />
                    <WeBelieve />
                </Container>
                <Footer />
            </div>
        );
    }
}

export default WhoWeAre;