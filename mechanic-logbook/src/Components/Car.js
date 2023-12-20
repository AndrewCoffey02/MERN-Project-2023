import Card from "./Card";

export default function Car(cars) {

    //return as array
    return cars.myCars.map(
        (car) => {
            return <Card myCar={car} key={car._id} Reload={()=>{cars.ReloadData();}}></Card>
        } 
    );
}

