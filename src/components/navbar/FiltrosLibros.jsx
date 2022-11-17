import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const FiltrosLibros = () => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item>Terror</ListGroup.Item>
                    <ListGroup.Item>Drama</ListGroup.Item>
                    <ListGroup.Item>Ciencia Ficcion</ListGroup.Item>
                    <ListGroup.Item>Historia</ListGroup.Item>
                    <ListGroup.Item>Romance</ListGroup.Item>
                </ListGroup>
            </Card>
        </>
    );
}

export default FiltrosLibros;