import Card from 'react-bootstrap/Card';
import  Button  from 'react-bootstrap/Button';


function Cards(car) {

    return (
        <div align='center'>
            <Card style= {{width: '36rem' }} className="mt-2" data-bs-theme="dark">
                <Card.Header>{car.myCar.owner}</Card.Header>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">{car.myCar.make} </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{car.myCar.model}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{car.myCar.year}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{car.myCar.engine}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{car.myCar.problem}</Card.Subtitle>
                </Card.Body>
                <Button variant="danger" classname="mb-2 text-muted">This is a button</Button>
            </Card>
        </div>
    );
}

export default Cards;