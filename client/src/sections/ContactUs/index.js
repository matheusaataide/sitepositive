import React  from 'react';
import axios from 'axios';
import $ from 'jquery';
import { Container, Row, Col, Button, Image, Form } from 'react-bootstrap';

import'./styles.css';
import baseURL from '../../util/baseUrl';
import ImageCartoonPatricia from '../../assets/img/caricaturas/patricia.png';

class ContactUs extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {
            name: '',
            whatsapp: '',
            email: '',
            content: ''
        };
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { name, email, whatsapp, content } = this.state;

        axios.post(`${baseURL}/api/messages`, { name, email, whatsapp, content })
            .then(response => {
                console.log(response);
                $('#rmsgSubmit').text('Recebemos sua mensagem!');
            });

        this.setState({
            name: '',
            whatsapp: '',
            email: '',
            content: ''
        });
    }

    render(){
        const { name, email, whatsapp, content } = this.state;
        return (
        <section className="contact-us page-section bg-primary">
            <Container>
                <div className="section-wrapper">
                    <Row>
                        <Col xs={12} lg={{ span: 6, offset: 2}}>
                            <div className="form-container">
                                <h2 className="section-title">Fale conosco</h2>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group>
                                        <Form.Label htmlFor="rname" className="label-control">Nome</Form.Label>
                                        <Form.Control required
                                            type="text"
                                            className="form-control-input" 
                                            id="rname" 
                                            name="name"
                                            placeholder="Seu nome" 
                                            value={name}
                                            onChange={this.onChange}
                                            />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="remail" className="label-control">E-mail</Form.Label>
                                        <Form.Control required
                                            type="text" 
                                            className="form-control-input" 
                                            id="remail" 
                                            name="remail" 
                                            placeholder="Seu email"
                                            value={email}
                                            onChange={this.onChange}
                                            />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="rphone" className="label-control">Número de telefone</Form.Label>
                                        <Form.Control required
                                            type="text" 
                                            className="form-control-input" 
                                            id="rphone" 
                                            name="whatsapp"
                                            placeholder="Seu número de telefone/whatsapp"
                                            value={whatsapp}
                                            onChange={this.onChange}
                                            />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="rmsg" className="label-control">Mensagem</Form.Label>
                                        <Form.Control required 
                                            as="textarea"
                                            className="form-control-textarea" 
                                            id="msg" 
                                            name="content" 
                                            rows={3} 
                                            placeholder="Digite a mensagem..."
                                            value={content}
                                            onChange={this.onChange}
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