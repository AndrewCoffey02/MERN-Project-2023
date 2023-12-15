import Car from "./Car";
import { useEffect, useState } from "react";
import axios from 'axios';

function Carlist() {

    //set instances of data
    const [car, setCar] = useState([]);

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
    //return array 
    return(
        <div>
            <Car myCars = {car}></Car>
        </div>
    )
}

export default Carlist;