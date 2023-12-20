import Car from "./Car";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Carlist() {

    //set instances of data
    const [car, setCar] = useState([]);
    const [recentCar, setRecentCar] = useState([]);

    useEffect(
        () => {
            //axios request to darabase
            axios.get("http://localhost:4000/api/cars")
            .then( (response) => {
                //set array to instances
                setCar(response.data);
            })
            .catch(
                (error) => {
                    console.error(error);
                }
            )
        }, []
    );

    const RecentCar = () => {

        if(car.length > 0) {
            recentCar(car[0]);
        }
    }

    //return array 
    return(
        <div align="center">
            <h2>Most Recent Car: </h2>
            <Car myCars = {recentCar}></Car>
        </div>
    )
}