const mongoose = require("mongoose");
var DB_URL = "mongodb://127.0.0.1:27017/Students";
mongoose.connect(DB_URL,{  
    useNewUrlParser: "true",
    useUnifiedTopology: "true"});

let StudentsSchema = new mongoose.Schema({
    name:{type:String, required:true,pattern:"^[a-zA-Z]+$"},
    age:{type:Number, required:true, minimum:15,maximum:50},
    dept:{type:String, required:true, enum:["SD","UI","SWA"], minLength:2, maxLength:3}
})

module.exports = mongoose.model("students", StudentsSchema);