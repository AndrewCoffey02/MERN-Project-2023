import Card from "./Card";

function Car(car) {

    return car.myCars.map(
        (car) => {
            return <Card myCar={car} key={car._id}></Card>
        }
    );
}

export default Car;