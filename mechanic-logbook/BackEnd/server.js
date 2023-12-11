//npm i express
const express = require('express');
const app = express();
const port = 4000;

//npm i body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// adding mongoose
const mongoose = require('mongoose');

main().catch(err => console.log(err));

//accessing the mongodb 
async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.xqnbbts.mongodb.net/?retryWrites=true&w=majority');
}

//defining the structure of "Car" properties
const CarSchema = new mongoose.Schema({
    Owner: String,
    Make: String,
    Model: String,
    Year: String,
    Engine: String,
    Problem: String
})

//accessing and defining to the Car model
const CarModel = mongoose.model('Cars', CarSchema )


//adding to Car from 
app.post('/api/Cars', (req,res) => {
    console.log(req.body);
    CarModel.create({
        Owner: req.body.Owner,
        Make: req.body.Make,
        Model: req.body.Model,
        Year: req.body.Year,
        Engine: req.body.Engine,
        Problem: req.body.Problem
    })

    //passing the id to the database
    .then(() => {res.send("Car Added to log")})
    .catch(() => {res.send("Car not added to log!")});
})

//app listening for requests
app.listen(port, () => {
    console.log(`App, listening on port ${port}`)
});