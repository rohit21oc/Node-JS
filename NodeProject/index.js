const mongoose = require("mongoose");


// Write the code with mongoDB

mongoose.connect("mongodb://localhost/be_demo");

const db = mongoose.connection; //start the connection with mongoDB

db.on("error", ()=>{
    console.log("Error while connecting to DB")
});

db.once("open",()=>{
    console.log("Connected to MongoDB");
})