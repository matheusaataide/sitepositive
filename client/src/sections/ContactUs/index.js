import React from 'react';
import $ from 'jquery';
import { Container, Row, Col, Button } from 'react-bootstrap';

import'./styles.css';

class ContactUs extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        $("input, textarea").keyup(function(){
            if ($(this).val() != '') {
                $(this).addClass('notEmpty');
            } else {
                $(this).removeClass('notEmpty');
            }
        });
    }

    render(){
        return (
        <section className="contact-us">
            <Container>
                <div className="section-wrapper">
                    <Row>
                        <Col lg={6}>
                            <div className="text-container">
                                <h2>Just Fill Out The Form To Schedule A Quick Call</h2>
                                <p>Zigo is one of the most experienced business software integrators in the market. Discover what it can do for your company with just a few mouse clicks.</p>
                                <ul className="list-unstyled li-space-lg">
                                    <li className="media">
                                        <i className="fas fa-square"></i><div className="media-body">It's easy to setup a meeting with our consultants</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square"></i><div className="media-body">Improve your business flow with the right software</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square"></i><div className="media-body">Better productivity through the entire supply chain</div>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="form-container">
                                <form id="requestForm">
                                    <div className="form-group">
                                        <input 
                                            type="text"
                                            className="form-control-input" 
                                            id="rname" 
                                            name="rname" 
                                            required />
                                        <label className="label-control" for="rname">Full name</label>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="email" 
                                            className="form-control-input" 
                                            id="remail" 
                                            name="remail" 
                                            required />
                                        <label className="label-control" for="remail">Email</label>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            className="form-control-input" 
                                            id="rphone" 
                                            name="rphone"
                                            required />
                                        <label className="label-control" for="rphone">Phone</label>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control-textarea" id="msg" name="msg" rows="3" required />
                                        <label className="label-control" for="msg">Mensagem</label>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-group">
                                        <Button type="submit" className="form-control-submit-button">Submit</Button>
                                    </div>
                                    <div className="form-message">
                                        <div id="rmsgSubmit" className="h3 text-center hidden"></div>
                                    </div>
                                </form>
                            </div> 
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
        );
    }
}

export default ContactUs;