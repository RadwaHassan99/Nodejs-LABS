var StudentsArr = [];
var id = 0;
class Students{
    constructor(name, age, dept){
        this.id = ++id;
        this.name = name;
        this.age = age;
        this.dept = dept;
    }
    static GetAllStudents(){
        return StudentsArr;
    }
    static GetStudent(ID){
        return StudentsArr.find((s)=>{return s.id == ID});
    }
    saveStudent(){
        StudentsArr.push(this)
        return this;
    }
    static deleteStudent(ID){
            var index;
            StudentsArr.find((s,i)=>{
            if(s.id == ID){
                index = i;
            }
        })
        StudentsArr.splice(index, 1);
    }
    static updateStudent(ID,updates){
        StudentsArr.find((s,i)=>{
            if(s.id == ID){
                s.name = updates.name;
                s.age = updates.age;
                s.dept = updates.dept;
                console.log(StudentsArr[i]);
                return StudentsArr[i];
            }
        })
    }

}
module.exports = Students;
var s = new Students("Ahmed", 20, "SD");

