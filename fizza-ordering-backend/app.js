const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const route = require('./Route/index')
//const dotenv = require("dotenv")

//dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', route)

const port =  8000;

mongoose.connect('mongodb+srv://Madhusudan:15717@cluster0.ssc3h.mongodb.net/Pizza-Orders?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to DataBase');
}).catch(err => {
    console.log(err)
})

app.get("/", (req, res) => {
    res.send("Hello")
}).listen(port, () => {
    console.log(`Server is running ${port}`)
} )