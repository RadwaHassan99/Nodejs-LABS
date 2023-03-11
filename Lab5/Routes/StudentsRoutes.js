const express = require("express");
let router = express.Router();
const StudentsController = require("../Controllers/StudentsController");

router.get("/",StudentsController.GetAllStudents);
router.get("/:id",StudentsController.GetStudentByID);
router.post("/create",StudentsController.AddNewStudent);
router.delete("/:id",StudentsController.DeleteStudentByID);
router.put("/:id",StudentsController.UpdateStudentByID);
module.exports = router;