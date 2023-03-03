var fs = require("fs");
fs.writeFileSync("result.txt","All requests results:\n");
var http = require("http");
http.createServer((req,res)=>{
    if(req.url!== 'favicon.ico'){
        var reqArr = req.url.split("/");
        var operation = reqArr[1];
        var operands = reqArr.slice(2);
        var result = Number(operands[0]);
        switch(operation){
            case 'add':{
                for(let i=1;i<operands.length;i++){
                    result += Number(operands[i]);  
                }
                break;
            }
            case 'sub':{
                for(let i=1;i<operands.length;i++){
                    result -= Number(operands[i]);
                }
                break;
            }
            case 'mul':{
                for(let i=1;i<operands.length;i++){
                    result *= Number(operands[i]);
                }
                break;
            }
            case 'div':{
                for(let i=1;i<operands.length;i++){
                    result /= Number(operands[i]);
                }
                break;
                
            }
            default:{
                result = "undefiend";
            }
        }
        res.writeHead(200,{"content-type":"text/html"});
        fs.appendFileSync("result.txt",`${operation} of ${operands} is ${result}\n`);
    }
    res.end(`<h1> Result: ${operation} of ${operands} is ${result}\n</h1>`);
}).listen("7000",()=>{
    console.log("successful connection to port 7000");
})