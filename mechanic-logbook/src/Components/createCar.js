import axios from "axios";
import { useState } from "react";

function Create() {

    //create arrays for adding each statement into Log
    const[Owner, setOwner] = useState([]);
    const[Make, setMake] = useState([]);
    const[Model, setModel] = useState([]);
    const[Year, setYear] = useState([]);
    const[Engine, setEngine] = useState([]);
    const[Problem, setProblem] = useState([]);

    //handles and adds to database
    const handler = (e) => {

        e.preventDefault();

        const car = {
            owner:Owner,
            make:Make,
            model:Model,
            year:Year,
            engine:Engine,
            problem:Problem
        }

        //posts request through port
        axios.post("http://localhost:4000/api/cars", car)

    }
    function clickMe() {
        alert("You have submitted to list");
    }

    return (
        //Car card user layout
        <div align="center" >
            <form onSubmit={handler}>
                <div className="form-group" >
                    <label>Please enter Car Owner: </label>
                    <input type="text"
                    className="form-control"
                    value={Owner} 
                    onChange={ (e) => { setOwner(e.target.value) }}/> 
                </div> 
                <div className="form-group">
                    <label>Please enter Car Make: </label>
                    <input type="text"
                    className="form-control"
                    value={Make}
                    onChange={ (e) => { setMake(e.target.value) }}/>
                </div>
                <div className="form-group">
                    <label>Please enter Car Model: </label>
                    <input type="text"
                    className="form-control"
                    value={Model}
                    onChange={ (e) => { setModel(e.target.value) }}/>
                </div>
                <div className="form-group">
                    <label>Please enter what year the car was made: </label>
                    <input type="text"
                    className="form-control"
                    value={Year}
                    onChange={ (e) => { setYear(e.target.value) }}/>
                </div>
                <div className="form-group">
                    <label>Please enter Car Engine size: </label>
                    <input type="text"
                    className="form-control"
                    value={Engine}
                    onChange={ (e) => { setEngine(e.target.value) }}/>
                </div>
                <div className="form-group">
                    <label>Please enter the customers problem with the car: </label>
                    <input type="text"
                    className="form-control"
                    value={Problem}
                    onChange={ (e) => { setProblem(e.target.value) }}/>
                </div>
                <input type="submit"
                value="Add Car" onClick={clickMe}/>
            </form>
        </div>
    )
}

export default Create;