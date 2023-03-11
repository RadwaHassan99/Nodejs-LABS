//const validate = require("../utils/CoursesValidation");
//let coursesModel = require("../Models/CoursesModel");
let coursesDB = require("../DB/CoursesDB");


var GetAllCourses = async(req,res)=>{
    var AllCourses = await coursesDB.find();
    await res.json(AllCourses);
}

var GetCourseByID = async(req,res)=>{
    var ID = req.params.id;
    res.json(await coursesDB.findById(ID));
}

var AddNewCourse = async(req,res)=>{
        var newCourse = req.body; 
        var  coursesDBModel = new coursesDB(newCourse);
        await coursesDBModel.save();
        await res.json(coursesDBModel);
}

var DeleteCourseByID = async(req,res)=>{
    var ID = req.params.id;
    await coursesDB.findByIdAndDelete(ID);
    res.send("Deleted Successfully");
}
var UpdateCourseByID = async(req, res)=>{
    var ID = req.params.id;
    var updatedCourse = req.body;
    await coursesDB.updateOne({_id:ID},{"name":updatedCourse.name});
    await res.send(updatedCourse);
}


/*
var GetAllCourses = (req,res)=>{
    var AllCourses = coursesModel.GetAllCourses();
    res.json(AllCourses);
}
var GetCourseByID = (req,res)=>{
    var ID = req.params.id;
    res.json(coursesModel.GetCourse(ID));
}

var AddNewCourse = (req,res)=>{
    var newCourse = req.body; 
    var valid = validate(newCourse);
    if(valid){
        var newCourseModel = new coursesModel(newCourse.name)
        newCourseModel.saveCourse();
        res.status(201).json(newCourseModel);
    }else{
        res.status(400).send("Check ur Data Type")
    }
}
var DeleteCourseByID = (req,res)=>{
    var ID = req.params.id;
    coursesModel.deleteCourse(ID);
    res.send("Deleted Successfully");
}
var UpdateCourseByID = (req, res)=>{
    var ID = req.params.id;
    var updatedCourse = req.body;
    res.json(coursesModel.updateCourse(ID,updatedCourse)||"Not Found")
}*/
module.exports = {
    GetAllCourses,
    GetCourseByID,
    AddNewCourse,
    DeleteCourseByID,
    UpdateCourseByID
};
