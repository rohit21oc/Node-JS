/**
 * Define the schema of students collection to be stored in DB
 */

const mongoose = require("mongoose");

// Schema

const studentSchema = new mongoose.Schema({
    name:String,
    age:Number,
})

module.exports =mongoose.model("students",studentSchema)