import { useState } from "react";

function Create() {

    const[Owner, setOwner] = useState([]);
    const[Make, setMake] = useState([]);
    const[Model, setModel] = useState([]);
    const[Year, setYear] = useState([]);
    const[Engine, setEngine] = useState([]);
    const[Problem, setProblem] = useState([]);

    const handler = (e) => {

        e.preventDefault();

        const Car = {
            Owner:Owner,
            Make:Make,
            Model:Model,
            Year:Year,
            Engine:Engine,
            Problem:Problem
        }

    }

    return (
        <div align="center">
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
                value="Add Car"/>
        </div>
    )
}

export default Create;