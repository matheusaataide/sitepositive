import React from 'react';
import $ from 'jquery';
import { Container, Row, Col, Button, Image, Form } from 'react-bootstrap';

import'./styles.css';
import ImageCartoonPatricia from '../../assets/img/caricaturas/patricia.png';

class ContactUs extends React.Component {
    componentDidMount () {
        $("input, textarea").keyup(function(){
            if ($(this).val() !== '') {
                $(this).addClass('notEmpty');
            } else {
                $(this).removeClass('notEmpty');
            }
        });
    }

    render(){
        return (
        <section className="contact-us page-section">
            <Container>
                <div className="section-wrapper">
                    <Row>
                        <Col xs={12} lg={{ span: 6, offset: 2}}>
                            <div className="form-container">
                                <h2 className="section-title">Fale conosco</h2>
                                <Form>
                                    <Form.Group controlId="contactUs.name">
                                        <Form.Label htmlFor="rname" className="label-control">Nome</Form.Label>
                                        <Form.Control required
                                            type="text"
                                            className="form-control-input" 
                                            id="rname" 
                                            name="name"
                                            placeholder="Seu nome" 
                                            />
                                    </Form.Group>
                                    <Form.Group controlId="contactUs.email">
                                        <Form.Label htmlFor="remail" className="label-control">E-mail</Form.Label>
                                        <Form.Control required
                                            type="email" 
                                            className="form-control-input" 
                                            id="remail" 
                                            name="remail" 
                                            placeholder="Seu email"
                                            />
                                    </Form.Group>
                                    <Form.Group controlId="contactUs.phone">
                                        <Form.Label htmlFor="rphone" className="label-control">Número de telefone</Form.Label>
                                        <Form.Control required
                                            type="text" 
                                            className="form-control-input" 
                                            id="rphone" 
                                            name="whatsapp"
                                            placeholder="Seu número de telefone/whatsapp"
                                            />
                                    </Form.Group>
                                    <Form.Group controlId="contactUs.msg">
                                        <Form.Label htmlFor="rmsg" className="label-control">Mensagem</Form.Label>
                                        <Form.Control required 
                                            as="textarea"
                                            className="form-control-textarea" 
                                            id="msg" 
                                            name="msg" 
                                            rows={3} 
                                            placeholder="Digite a mensagem..."
                                            />
                                    </Form.Group>
                                    <div className="form-group">
                                        <Button
                                            type="submit" 
                                            className="form-control-submit-button"
                                            style={{
                                                marginTop: '2em'
                                            }}>
                                                Enviar
                                        </Button>
                                    </div>
                                    <div className="form-message">
                                        <div id="rmsgSubmit" className="h3 text-center hidden"></div>
                                    </div>
                                </Form>
                            </div> 
                        </Col>
                        <Col lg={3}>
                            <Image className="img-fluid cartoon" 
                                src={ImageCartoonPatricia}
                                alt="Caricatura de Patrícia" />
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
        );
    }
}

export default ContactUs;