import Car from "./Car";
import { useEffect, useState } from "react";
import axios from 'axios';

function Carlist() {

    const [data, setData] = useState([]);

    useEffect(
        () => {

            axios.get("http://localhost:4000/api/cars")
            .then( (response) => {

                setData(response.data);
            })
            .catch(
                (error) => {
                    console.error(error);
                }
            )
        }, []
    );

    return(
        <div>
            <Car myCars = {data}></Car>
        </div>
    )
}

export default Carlist;