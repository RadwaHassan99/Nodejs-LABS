const Ajv = require("ajv");
const ajv = new Ajv();

const CoursesSchema = {
    type:"object",
    properties:{
        name:{type:"string", enum:["Nodejs","PHP","JS","HTML","CSS","Angular","React"]}
    },
    required:["name"],
    additionalProperties:false
}

module.exports = ajv.compile(CoursesSchema);
