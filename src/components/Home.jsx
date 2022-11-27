import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from './navbar/Navbar'
import CardMasVistos from './cards/CardMasVistos';
import FiltrosLibros from './navbar/FiltrosLibros';
import FooterComponent from './FooterComponent';
import CardItem from './cards/CardItem';
import UltimoGraduado from './statics/img/el-ultimo-graduado-el-ultimo-graduado.jpg'


const Home = () => {
    const dataBooks = [
        {
            title: "El ultimo graduado",
            description: "La amenaza de la graduación cobra un peso significativo al tiempo que la innovadora trilogía de Naomi Novik, superventas del New York Times, continúa con la asombrosa secuela de \"Una educación mortal\". «El conocimiento otorga protección.» Ese es el lema oficial de la Escolomancia.",
            bannerBook: UltimoGraduado
        },
        {
            title: "El ultimo graduado",
            description: "La amenaza de la graduación cobra un peso significativo al tiempo que la innovadora trilogía de Naomi Novik, superventas del New York Times, continúa con la asombrosa secuela de \"Una educación mortal\". «El conocimiento otorga protección.» Ese es el lema oficial de la Escolomancia.",
            bannerBook: UltimoGraduado
        },
        {
            title: "El ultimo graduado",
            description: "La amenaza de la graduación cobra un peso significativo al tiempo que la innovadora trilogía de Naomi Novik, superventas del New York Times, continúa con la asombrosa secuela de \"Una educación mortal\". «El conocimiento otorga protección.» Ese es el lema oficial de la Escolomancia.",
            bannerBook: UltimoGraduado
        }
    ]

    const dataBaseBooks = [
        {
            "title": "El ultimo graduado",
            "description": "La amenaza de la graduación cobra un peso significativo al tiempo que la innovadora trilogía de Naomi Novik, superventas del New York Times, continúa con la asombrosa secuela de 'Una educación mortal'. «El conocimiento otorga protección.» Ese es el lema oficial de la Escolomancia.",
            "bannerBook": "Imagen del libro",
            "precio": 200,
            "categoria": "terror"
        },
        {
            "title": "El ultimo graduado",
            "description": "La amenaza de la graduación cobra un peso significativo al tiempo que la innovadora trilogía de Naomi Novik, superventas del New York Times, continúa con la asombrosa secuela de 'Una educación mortal'. «El conocimiento otorga protección.» Ese es el lema oficial de la Escolomancia.",
            "bannerBook": "Imagen del libro",
            "precio": 200,
            "categoria": "terror"
        },
        {
            "title": "El ultimo graduado",
            "description": "La amenaza de la graduación cobra un peso significativo al tiempo que la innovadora trilogía de Naomi Novik, superventas del New York Times, continúa con la asombrosa secuela de 'Una educación mortal'. «El conocimiento otorga protección.» Ese es el lema oficial de la Escolomancia.",
            "bannerBook": "Imagen del libro",
            "precio": 200,
            "categoria": "terror"
        },
        {
            "title": "El ultimo graduado",
            "description": "La amenaza de la graduación cobra un peso significativo al tiempo que la innovadora trilogía de Naomi Novik, superventas del New York Times, continúa con la asombrosa secuela de 'Una educación mortal'. «El conocimiento otorga protección.» Ese es el lema oficial de la Escolomancia.",
            "bannerBook": "Imagen del libro",
            "precio": 200,
            "categoria": "terror"
        },
        {
            "title": "El ultimo graduado",
            "description": "La amenaza de la graduación cobra un peso significativo al tiempo que la innovadora trilogía de Naomi Novik, superventas del New York Times, continúa con la asombrosa secuela de 'Una educación mortal'. «El conocimiento otorga protección.» Ese es el lema oficial de la Escolomancia.",
            "bannerBook": "Imagen del libro",
            "precio": 200,
            "categoria": "terror"
        },
        {
            "title": "El ultimo graduado",
            "description": "La amenaza de la graduación cobra un peso significativo al tiempo que la innovadora trilogía de Naomi Novik, superventas del New York Times, continúa con la asombrosa secuela de 'Una educación mortal'. «El conocimiento otorga protección.» Ese es el lema oficial de la Escolomancia.",
            "bannerBook": "Imagen del libro",
            "precio": 200,
            "categoria": "terror"
        },
        {
            "title": "El ultimo graduado",
            "description": "La amenaza de la graduación cobra un peso significativo al tiempo que la innovadora trilogía de Naomi Novik, superventas del New York Times, continúa con la asombrosa secuela de 'Una educación mortal'. «El conocimiento otorga protección.» Ese es el lema oficial de la Escolomancia.",
            "bannerBook": "Imagen del libro",
            "precio": 200,
            "categoria": "terror"
        },
        {
            "title": "El ultimo graduado",
            "description": "La amenaza de la graduación cobra un peso significativo al tiempo que la innovadora trilogía de Naomi Novik, superventas del New York Times, continúa con la asombrosa secuela de 'Una educación mortal'. «El conocimiento otorga protección.» Ese es el lema oficial de la Escolomancia.",
            "bannerBook": "Imagen del libro",
            "precio": 200,
            "categoria": "terror"
        },
        {
            "title": "El ultimo graduado",
            "description": "La amenaza de la graduación cobra un peso significativo al tiempo que la innovadora trilogía de Naomi Novik, superventas del New York Times, continúa con la asombrosa secuela de 'Una educación mortal'. «El conocimiento otorga protección.» Ese es el lema oficial de la Escolomancia.",
            "bannerBook": "Imagen del libro",
            "precio": 200,
            "categoria": "terror"
        },
        {
            "title": "El ultimo graduado",
            "description": "La amenaza de la graduación cobra un peso significativo al tiempo que la innovadora trilogía de Naomi Novik, superventas del New York Times, continúa con la asombrosa secuela de 'Una educación mortal'. «El conocimiento otorga protección.» Ese es el lema oficial de la Escolomancia.",
            "bannerBook": "Imagen del libro",
            "precio": 200,
            "categoria": "terror"
        },
        {
            "title": "El ultimo graduado",
            "description": "La amenaza de la graduación cobra un peso significativo al tiempo que la innovadora trilogía de Naomi Novik, superventas del New York Times, continúa con la asombrosa secuela de 'Una educación mortal'. «El conocimiento otorga protección.» Ese es el lema oficial de la Escolomancia.",
            "bannerBook": "Imagen del libro",
            "precio": 200,
            "categoria": "terror"
        },
        {
            "title": "El ultimo graduado",
            "description": "La amenaza de la graduación cobra un peso significativo al tiempo que la innovadora trilogía de Naomi Novik, superventas del New York Times, continúa con la asombrosa secuela de 'Una educación mortal'. «El conocimiento otorga protección.» Ese es el lema oficial de la Escolomancia.",
            "bannerBook": "Imagen del libro",
            "precio": 200,
            "categoria": "terror"
        },
        {
            "title": "El ultimo graduado",
            "description": "La amenaza de la graduación cobra un peso significativo al tiempo que la innovadora trilogía de Naomi Novik, superventas del New York Times, continúa con la asombrosa secuela de 'Una educación mortal'. «El conocimiento otorga protección.» Ese es el lema oficial de la Escolomancia.",
            "bannerBook": "Imagen del libro",
            "precio": 200,
            "categoria": "terror"
        },
        {
            "title": "El ultimo graduado",
            "description": "La amenaza de la graduación cobra un peso significativo al tiempo que la innovadora trilogía de Naomi Novik, superventas del New York Times, continúa con la asombrosa secuela de 'Una educación mortal'. «El conocimiento otorga protección.» Ese es el lema oficial de la Escolomancia.",
            "bannerBook": "Imagen del libro",
            "precio": 200,
            "categoria": "terror"
        },
        {
            "title": "El ultimo graduado",
            "description": "La amenaza de la graduación cobra un peso significativo al tiempo que la innovadora trilogía de Naomi Novik, superventas del New York Times, continúa con la asombrosa secuela de 'Una educación mortal'. «El conocimiento otorga protección.» Ese es el lema oficial de la Escolomancia.",
            "bannerBook": "Imagen del libro",
            "precio": 200,
            "categoria": "terror"
        }
    ]

    return (
        <>
            <Row>
                <Col sm={12}>
                    <div
                        style={{
                            marginTop: 5,
                            marginBottom: 10,
                            height: 50,
                            alignItems: 'center',
                            borderRadius: 20,
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
                            alignItems: 'center',
                            alginContent: 'center',
                        }}
                    >
                        <FiltrosLibros />
                    </div>

                </Col>
                <Col sm={10} 
                style={{
                    marginBottom:50,
                    marginLeft: 0
                    }}
                    >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            alignContent: 'center',
                            marginBottom: "10px",
                            justifyContent: 'center',
                            flexWrap: 'wrap'
                        }}
                    >
                        {dataBooks.map((item)=>(
                            <CardMasVistos dataBooks={item} />
                        ))}                       
                    </div>
                    <div
                        style={{
                            marginTop: 50,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            alignContent: 'flex-start',
                            justifyContent: 'flex-start',
                            flexWrap: 'wrap',
                            marginBottom: 10,
                            margin: 50
                        }}
                    >{dataBaseBooks.map((item) => (
                        <CardItem dataBaseBooks={dataBaseBooks} />
                    ))}
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