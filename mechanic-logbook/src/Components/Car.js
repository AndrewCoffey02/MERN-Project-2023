import Card from "./Card";

export default function Car(car) {

    //return as array
    return car.myCars.map(
        (car) => {
            return <Card myCar={car} key={car._id} Reload={()=>{car.reloadData()}}></Card>
        } 
    );
}

