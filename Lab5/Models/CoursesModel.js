var CoursessArr = [];
var id = 0;
class Courses{
    constructor(name){
        this.id = ++id;
        this.name = name;
    }
    static GetAllCourses(){
        return CoursessArr;
    }
    static GetCourse(ID){
        return CoursessArr.find((s)=>{return s.id == ID});
    }
    saveCourse(){
        CoursessArr.push(this)
        return this;
    }
    static deleteCourse(ID){
            var index;
            CoursessArr.find((s,i)=>{
            if(s.id == ID){
                index = i;
            }
        })
        CoursessArr.splice(index, 1);
    }
    static updateCourse(ID,updates){
        var index ;
        CoursessArr.find((s,i)=>{
            if(s.id == ID){
                index = i;
                s.name = updates.name;
            }
        })
        return CoursessArr[index];
    }

}

module.exports = Courses;


