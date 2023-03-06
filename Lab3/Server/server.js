var express = require('express')
var path = require("path");
const fs = require("fs");
var bodyParser = require('body-parser');

var client = {};
var newClients={"clients":[]};
var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'./public')));
app.use(express.urlencoded({extended: false}));

app.get('/style/style.css', function(req,res){
  res.sendFile(path.join(__dirname,'../Client/style/style.css'));
});
app.get('/images/backgd.jpg', function(req,res){
  res.sendFile(path.join(__dirname,'../Client/images/backgd.jpg'));
});
app.get('/main.html', function(req,res){
  res.sendFile(path.join(__dirname,'../Client/main.html'));
});
app.get('/script/script.js', function(req,res){
  res.sendFile(path.join(__dirname,'../Client/script/script.js'));
});
app.get('/profile.html', function(req,res){
  res.sendFile(path.join(__dirname,'../Client/profile.html'));
});
app.get('/Server/data.json', function(req,res){
  res.sendFile(path.join(__dirname,'../Server/data.json'));
});
app.get('/script/fetch.js', function(req,res){
  res.sendFile(path.join(__dirname,'../Client/script/fetch.js'));
});
app.get('/favicon.ico', function(req,res){
  res.sendFile(path.join(__dirname,'../Client/favicon.ico'));
});
let data=0;
app.post('/profile.html', 
  (request, response,next)=>{
     data = request.body;
     //JSON.stringify(request.body);
     next()},
      (request, response)=>{
        console.log(data);
        response.send(`  
        <h2>Welcome to info Page</h2>
        <p>name: ${data.name}</p>
        <p>email: ${data.email}</p>
        <p>address: ${data.addr}</p>
        <p>phone: ${data.mob}</p>
        <p>password: ${data.pass}</p> 
        <button id="ajx">Get users</button>
        <div id="all"></div>
        <script src="./script/fetch.js"></script>`);
        client.name=data.name;
        client.email=data.email;
        client.addr=data.addr;
        client.mob=data.mob;
        client.pass=data.pass;
        fs.readFile('./data.json', function (err, data) {
        newClients = JSON.parse(data)
        newClients.clients.push(client);
        fs.writeFileSync("data.json", JSON.stringify(newClients));
      })
      
      }
);

const port = process.env.port || 3000;
app.listen(port,()=>{
  console.log(`http://localhost:${port}/main.html`)
})

