const express = require("express");
let router = express.Router();
const CoursesController = require("../Controllers/CoursesController");

router.get("/",CoursesController.GetAllCourses);
router.get("/:id",CoursesController.GetCourseByID);
router.post("/create",CoursesController.AddNewCourse);
router.delete("/:id",CoursesController.DeleteCourseByID);
router.put("/:id",CoursesController.UpdateCourseByID)

module.exports = router;