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

    //reload page
    const Reload = (e) => {
        axios.get('http://localhost:4000/api/cars')
        .then((response) => {
            //send data on request
            setCar(response.data);
        })
        //request error
        .catch(console.error());
    };

    //return array 
    return(
        <div>
            <Car myCars = {car} ReloadData={Reload}></Car>
        </div>
    )
}

export default Carlist;