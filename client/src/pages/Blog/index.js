import React from 'react';
import { Helmet } from 'react-helmet';

import CustomNavbar from '../../components/CustomNavbar';
import Footer from '../../components/Footer';
import Posts from '../../components/Posts';

class Blog extends React.Component {
    render () {
        return (
            <div className="page blog">
                <Helmet>
                    <title>Positive Treinamentos - Blog</title>
                </Helmet>

                <CustomNavbar />
                <Posts limit={4} />
                <Footer />
            </div>
        );
    }
}

export default Blog;