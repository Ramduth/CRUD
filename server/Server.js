const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./Models/Users");

const app = express()
app.use(cors())
app.use(express.json())
// const port = 5000;

mongoose.connect("mongodb://127.0.0.1:27017/crud")
// .then(()=>console.log("MongoDB connected"))
// .catch((err)=>console.log(err))

app.post("/createuser", (req,res)=>{
    userModel.create(req.body)
    .then((users)=>res.json(users))
    .catch((err)=>res.json(err))
})

app.get('/', (req,res)=>{
    userModel.find({})
    .then(users => res.json(users))
    .catch(error => res.json(error))
})

app.listen(3001, ()=>{
    console.log(`Server running on port 3001`);
    
})