import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";

import "./styles.css";

const Header = () => (
    <header id="header" className="header">
        <div className="header-content">
            <Container>
                <Row>
                    <Col sm={12} lg={6}>
                        <div className="text-container">
                            <h1>
                                <span className="turquoise">Conhecimento</span> e <span className="turquoise">transformação</span>
                                <br />para vida toda!
                            </h1>
                            <p className="p-large">
                                Estamos completamente comprometidos em construir, junto com você, famílias mais estruturada e
                                relacionamentos mais próximos entre pais, filhos e escola, criando ambientes mais 
                                harmoniosos e encorajadores, e assim, uma sociedade melhor e mais positiva.
                            </p>
                        </div>
                    </Col>
                    <Col sm={12} lg={6}>
                        <div className="image-container">
                            <Image fluid src={`./img/photos/familia-positive.jpg`} alt="alternative" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </header>
);

export default Header;