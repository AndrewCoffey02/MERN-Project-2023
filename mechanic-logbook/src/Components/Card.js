import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


export default function Cards(car) {

    const deleteCar = (e) => {
        //ignore default function
        e.preventDefault();
        //http request to delete car from database
        axios.delete('http://localhost:4000/api/cars/' + car.myCar._id)
            .then((res) => {

                // implements reload method
                let Reload = car.Reload();
            })
            //request error
            .catch(console.error());
    }

    const navigate = useNavigate();

    const EditPage = (e) => {
        e.preventDefault();
        navigate('/editCar/'+car.myCar._id);
    }


    return (
        //Car List display
        <div align="center"> 
            <Card style={{ width: '36rem' }} className="mt-2" data-bs-theme="dark">
                <Card.Header>Name: {car.myCar.owner}</Card.Header>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Make: {car.myCar.make} </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Model: {car.myCar.model}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Year: {car.myCar.year}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Engine: {car.myCar.engine}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Problem: {car.myCar.problem}</Card.Subtitle>
                    <Dropdown >
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">options</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={deleteCar}>Delete</Dropdown.Item>
                            <Dropdown.Item onClick={EditPage}>Edit</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Link to={ '/editCar/'+car.myCar._id} className='btn btn-primary'>Edit</Link>
                </Card.Body>
                <Button variant="success" className="mb-2 text-muted">Mark as Finished</Button>

            </Card>
        </div>
    );
}

