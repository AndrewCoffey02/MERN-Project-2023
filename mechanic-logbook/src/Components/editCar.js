import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Edit() {

    let {id} = useParams();

    const[Owner, setOwner] = useState('');
    const[Make, setMake] = useState('');
    const[Model, setModel] = useState('');
    const[Year, setYear] = useState('');
    const[Engine, setEngine] = useState('');
    const[Problem, setProblem] = useState('');

    const navigate = useNavigate();

    useEffect(() => {

        axios.get('http://localhost:4000/api/cars/'+id)
        .then((res) => {

            setOwner(res.data.Owner);
            setMake(res.data.Make);
            setModel(res.data.Model);
            setYear(res.data.Year);
            setEngine(res.data.Engine);
            setProblem(res.data.Problem);
        })
        .catch(
            console.error()
        )

    },[])

    const submitHandler = (e) => {
        e.preventdefault();

        const car = {
            owner:Owner,
            make:Make,
            model:Model,
            year:Year,
            engine:Engine,
            problem:Problem
        }

        axios.put("http://localhost:4000/api/cars/"+id, car)
        .then((res) => {
            navigate('/read');
        })
        .catch(console.error());
    }
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
                    value={Owner} 
                    onChange={ (e) => { setOwner(e.target.value) }}/> 
                </div> 
                <div className="form-group">
                    <label>Edit car Make: </label>
                    <input type="text"
                    className="form-control"
                    value={Make}
                    onChange={ (e) => { setMake(e.target.value) }}/>
                </div>
                <div className="form-group">
                    <label>Edit car model:  </label>
                    <input type="text"
                    className="form-control"
                    value={Model}
                    onChange={ (e) => { setModel(e.target.value) }}/>
                </div>
                <div className="form-group">
                    <label>Edit car year: </label>
                    <input type="text"
                    className="form-control"
                    value={Year}
                    onChange={ (e) => { setYear(e.target.value) }}/>
                </div>
                <div className="form-group">
                    <label>Edit Car Engine size: </label>
                    <input type="text"
                    className="form-control"
                    value={Engine}
                    onChange={ (e) => { setEngine(e.target.value) }}/>
                </div>
                <div className="form-group">
                    <label>Edit car problem: </label>
                    <input type="text"
                    className="form-control"
                    value={Problem}
                    onChange={ (e) => { setProblem(e.target.value) }}/>
                </div>
                <input type="submit"
                value="Submit Edit" onClick={clickMe}/>
            </form>
        </div>
    )


}
