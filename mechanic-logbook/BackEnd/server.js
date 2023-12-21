//npm i express
const express = require('express');
const app = express();
const port = 4000;

//request files from build folder
const path = require('path');
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

//add Cors to the server
const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

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
    owner: String,
    make: String,
    model: String,
    year: String,
    engine: String,
    problem: String
})

//accessing and defining to the Car model
const CarModel = mongoose.model('cars', CarSchema )


//adding to Car from 
app.post('/api/cars', (req,res) => {
    console.log(req.body);
    CarModel.create({
        owner: req.body.owner,
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        engine: req.body.engine,
        problem: req.body.problem
    })

    //passing the id to the database
    .then(() => {res.send("Car Added to log")})
    .catch(() => {res.send("Car not added to log!")});
})

//find and pass data as json
app.get('/api/cars', async(req, res) =>{
    
    let car = await CarModel.find({});
    res.json(car);
  
})

//Search by ID
app.get('/api/cars/:id', async(req, res) => {

    let car = await CarModel.findById(req.params.id);
    res.json(car);
})

//deletes card
app.delete('/api/car/:id', async(req, res) =>{

    console.log("Deleted list of id: "+req.params.id);

    let car = await CarModel.findByIdAndDelete(req.params.id);
    res.json(car);
})

//updates card 
app.put("/api/cars/:id", async(req, res) =>{ 

    let car = await CarModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.send(car);
})

//send requests to build files
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/../build/index.html'));
});

//app listening for requests
app.listen(port, () => {
    console.log(`App, listening on port ${port}`)
});