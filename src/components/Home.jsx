import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col sm={12}><h1>Nav Bar</h1></Col>
                </Row>
                <Row>
                    <Col sm={3}>Barra con filtros</Col>
                    <Col sm={9}>Cuerpo</Col>
                </Row>
                <Row>
                    <Col sm={12}><footer>This is a footer</footer></Col>
                </Row>
            </Container>
        </>
    );
}
export default Home;