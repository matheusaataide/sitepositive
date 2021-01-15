import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';

import CustomNavbar from '../../components/CustomNavbar';
import Footer from '../../components/Footer';

class Blog extends React.Component {
    state = {
        postId: 0
    };

    componentDidMount () {
        const { match: { params } } = this.props;

        this.setState({
            postId: params.postId
        });
    }

    render () {
        return (
            <div className="page blog d-flex flex-column">
                <Helmet>
                    <title>Positive Treinamentos - Disciplina Positiva</title>
                </Helmet>

                <CustomNavbar />
                <Container fluid className="flex-grow-1 flex-shrink-0">
                    <h1>{`${this.state.postId}`}</h1>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Blog;