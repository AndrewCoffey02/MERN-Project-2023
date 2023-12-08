import Card from 'react-bootstrap/Card';
import  Button  from 'react-bootstrap/Button';

function Cards(card) {

    return (
        <div align='center'>
            <Card style= {{width: '36rem' }} className="mt-2" data-bs-theme="dark">
                <Card.Header>Car Owner</Card.Header>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Make: </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Model:</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Year</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Engine:</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Problem:</Card.Subtitle>
                </Card.Body>
                <Button variant="danger" classname="mb-2 text-muted">This is a button</Button>
            </Card>
        </div>
    );
}

export default Cards;