//const validate = require("../utils/StudentsValidation");
//let StudentModel = require("../Models/StudentsModel");
let studentsDB = require("../DB/StudentsDB");


var GetAllStudents = async(req,res)=>{
    var AllStudents = await studentsDB.find();
    await res.json(AllStudents);
}

var GetStudentByID = async(req,res)=>{
    var ID = req.params.id;
    res.json(await studentsDB.findById(ID));
}

var AddNewStudent = async(req,res)=>{
        var newStudent = req.body; 
        var  studentsDBModel = new studentsDB(newStudent);
        await studentsDBModel.save();
        await res.json(studentsDBModel);
}

var DeleteStudentByID = async(req,res)=>{
    var ID = req.params.id;
    await studentsDB.findByIdAndDelete(ID);
    res.send("Deleted Successfully");
}

var UpdateStudentByID = async(req, res)=>{
    var ID = req.params.id;
    var updatedStudent = req.body;
    await studentsDB.updateOne({_id:ID},{"name":updatedStudent.name,"age":updatedStudent.age,"dept":updatedStudent.dept});
    await res.send(updatedStudent);
}



/*
var GetAllStudents = (req,res)=>{
    var AllStudents = StudentModel.GetAllStudents();
    res.json(AllStudents);//[]
}
var GetStudentByID = (req,res)=>{
    var ID = req.params.id;
    res.json(StudentModel.GetStudent(ID));
}
var AddNewStudent = (req,res)=>{
    var newStudent = req.body; 
    var valid = validate(newStudent);
    console.log(newStudent);
    if(valid){
        var newStudentModel = new StudentModel(newStudent.name, newStudent.age, newStudent.dept)
        newStudentModel.saveStudent();
        res.status(201).json(newStudentModel);
    }else{
        res.status(400).send("Check ur Data Type")
    }
}
var DeleteStudentByID = (req,res)=>{
    var ID = req.params.id;
    StudentModel.deleteStudent(ID);
    res.send("Deleted Successfully");
}
var UpdateStudentByID = (req, res)=>{
    var ID = req.params.id;
    var updatedStudent = req.body;
    res.json(StudentModel.updateStudent(ID,updatedStudent)||"Not Found");
}*/
module.exports = {
    GetAllStudents,
    GetStudentByID,
    AddNewStudent,
    DeleteStudentByID,
    UpdateStudentByID
};