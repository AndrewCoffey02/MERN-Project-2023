import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Edit() {

    //declare id string
    let {id} = useParams();

    // create card objects
    const[owner, setOwner] = useState('');
    const[make, setMake] = useState('');
    const[model, setModel] = useState('');
    const[year, setYear] = useState('');
    const[engine, setEngine] = useState('');
    const[problem, setProblem] = useState('');

    // declare navigate
    const navigate = useNavigate();

    useEffect(
        () => {

        // http request for the current state
        axios.get('http://localhost:4000/api/cars/'+id)
            .then((response) => {

                setOwner(response.data.owner);
                setMake(response.data.make);
                setModel(response.data.model);
                setYear(response.data.year);
                setEngine(response.data.engine);
                setProblem(response.data.problem);
            })
            .catch(
                console.error()
            );
        },[]
    );
    
    //submit method 
    const submitHandler = (e) => {

        e.preventDefault();

        const car = {
            owner:owner,
            make:make,
            model:model,
            year:year,
            engine:engine,
            problem:problem
        }

        //navigate back to main page
        axios.put('http://localhost:4000/api/cars/'+id, car)
        .then((res) => {
            navigate('/Carlist');
        })
        .catch(console.error());
    }

    //add pop up when submitted
    function clickMe() {
        alert("You have submitted to list");
    }

    return (
        //Car card user layout but in an edit page
        <div align="center" >
            <h2>Edit file:</h2>
            <form onSubmit={submitHandler}>
                <div className="form-group" >
                    <label>Please edit Car Owner: </label>
                    <input type="text"
                    className="form-control"
                    value={owner} 
                    onChange={ (e) => { setOwner(e.target.value) }}/> 
                </div> 
                <div className="form-group">
                    <label>Edit car Make: </label>
                    <input type="text"
                    className="form-control"
                    value={make}
                    onChange={ (e) => { setMake(e.target.value) }}/>
                </div>
                <div className="form-group">
                    <label>Edit car model:  </label>
                    <input type="text"
                    className="form-control"
                    value={model}
                    onChange={ (e) => { setModel(e.target.value) }}/>
                </div>
                <div className="form-group">
                    <label>Edit car year: </label>
                    <input type="text"
                    className="form-control"
                    value={year}
                    onChange={ (e) => { setYear(e.target.value) }}/>
                </div>
                <div className="form-group">
                    <label>Edit Car Engine size: </label>
                    <input type="text"
                    className="form-control"
                    value={engine}
                    onChange={ (e) => { setEngine(e.target.value) }}/>
                </div>
                <div className="form-group">
                    <label>Edit car problem: </label>
                    <input type="text"
                    className="form-control"
                    value={problem}
                    onChange={ (e) => { setProblem(e.target.value) }}/>
                </div>
                <input type="submit"
                value="Submit Edit" onClick={clickMe}/>
            </form>
        </div>
    )


}
