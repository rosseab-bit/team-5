import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import UltimoGraduado from '../statics/img/el-ultimo-graduado-el-ultimo-graduado.jpg';
const CardMasVistos = () => {
    return (
        <>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={UltimoGraduado} height="200px" />
                    <Card.Body>
                        <Card.Title>Book Tittle 1</Card.Title>
                        <Card.Text>
                            Descripcion o sinopsis del primer libro
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Ultima actualizacion del libro mas visto</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={UltimoGraduado} height="200px" />
                    <Card.Body>
                        <Card.Title>Book Tittle 2</Card.Title>
                        <Card.Text>
                            Descripcion o sinopsis del segundo titulo del libro.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Ultima actualizacion del libro mas visto</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={UltimoGraduado} height="200px" />
                    <Card.Body>
                        <Card.Title>Book Tittle 3</Card.Title>
                        <Card.Text>
                            Descripcion o sinopsis del tercer libro.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Ultima actualizacion del libro mas visto</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </>
    );
}
export default CardMasVistos;