import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from './navbar/Navbar'
import CardMasVistos from './cards/CardMasVistos';
import FiltrosLibros from './navbar/FiltrosLibros';
import FooterComponent from './FooterComponent';



const Home = () => {
    return (
        <>
            <Row>
                <Col sm={12}>
                    <div
                        style={{
                            marginTop: 5,
                            marginBottom: 50,
                            backgroundColor: '#7895B2',
                            height: 50,
                            alignItems: 'center',
                            borderRadius: 20,
                            marginLeft: 5,
                            marginRight: 5
                        }}
                    >
                        <Navbar></Navbar>
                    </div>

                </Col>
            </Row>
            <Row>
                <Col sm={2}>
                    <div
                        style={{
                            marginRight: 5,
                            marginLeft: 10,
                            alignItems: 'center',
                            alginContent: 'center',
                        }}
                    >
                        <p>Categorias</p>

                        <FiltrosLibros />
                    </div>

                </Col>
                <Col sm={10}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            alignContent: 'center',
                            marginLeft: '10%'
                        }}
                    >
                        <CardMasVistos />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <FooterComponent />
                </Col>
            </Row>
        </>
    );
}
export default Home;