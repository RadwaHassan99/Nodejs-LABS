const mongoose = require("mongoose");
var DB_URL = "mongodb://127.0.0.1:27017/Courses";
mongoose.createConnection(DB_URL);

let CoursesSchema = new mongoose.Schema({
    name:{type:String, required:true,enum:["Nodejs","PHP","JS","HTML","CSS","Angular","React"]}
})

module.exports = mongoose.model("courses", CoursesSchema);