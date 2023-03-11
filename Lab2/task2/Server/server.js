const http = require("http");
const fs = require("fs");
const config = require("./data.json");

let MainFileHTML = fs.readFileSync("../Client/main.html").toString();
let ProfileFileHTML = fs.readFileSync("../Client/profile.html").toString();
let StyleCSS = fs.readFileSync("../Client/style/style.css").toString();
let ScriptFile = fs.readFileSync("../Client/script/script.js").toString();
let ScriptFile2 = fs.readFileSync("../Client/script/fetch.js").toString();
let myImage = fs.readFileSync("../Client/images/backgd.jpg");
let myIcon = fs.readFileSync("../Client/favicon.ico");
let myJson = fs.readFileSync("../Server/data.json");

userName = "";
email = "";
addr = "";
phone = "";
pass ="";
http.createServer((req, res) => {
    //#region GET
    if (req.method == "GET") {
      switch (req.url) {
        case "/main.html":
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.write(MainFileHTML);
          break;
        case "/profile.html":
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.write(ProfileFileHTML);
          break;
        case "/style/style.css":
          res.writeHead(200, "Ok", { "content-type": "text/css" });
          res.write(StyleCSS);
          break;
        case "/script/script.js":
          res.writeHead(300, "Hii", { "content-type": "text/javascript" });
          res.write(ScriptFile);
          break;
          case "/script/fetch.js":
            res.writeHead(300, "Hii", { "content-type": "text/javascript" });
            res.write(ScriptFile2);
            break; 
        case "/images/backgd.jpg":
          res.writeHead(200, "ok", { "content-type": "image/jpeg" });
          res.write(myImage);
          break;
        case "/Server/data.json":
            res.writeHead(200, "ok", { "content-type": "application/json" });
            res.write(myJson);
            break;  
        case "/favicon.ico":
          res.writeHead(200, "ok", {
            "content-type": "image/vnd.microsoft.icon",
          });
          res.write(myIcon);
          break;
        default:
          res.write("<h1>No Page Found</h1>");
          break;
      }
      res.end();
    }

    if (req.method == "POST") {
      //url
      req.on("data", (data) => {
        // console.log(data)
        // console.log(data.toString())
        // res.write(MainFileHTML);
        // userName = data.toString().split("=")[1];
        // userName = data.toString();
        var info= data.toString().split("&");
        userName = info[0].substring(info[0].indexOf('=') + 1, );
        email = info[1].substring(info[1].indexOf('=') + 1, );
        addr = info[2].substring(info[2].indexOf('=') + 1, );
        phone = info[3].substring(info[3].indexOf('=') + 1, );
        pass = info[4].substring(info[4].indexOf('=') + 1, );
        let users = {"clients":[]};
        let user = {
          "Name": userName,
          "email": email,
          "Address": addr,
          "phone":phone,
          "password":pass
         }
         
         // Storing the JSON format data in myObject
        var data = fs.readFileSync("./data.json");
        users = JSON.parse(data);
          
        // Adding the new data to our object
        users.clients.push(user);
          
        // Writing to our JSON file
        fs.writeFile("./data.json", JSON.stringify(users), (err) => {
          // Error checking
          if (err) throw err;
          console.log("New data added");
        });

      });
      req.on("end", () => {
        ProfileFileHTML = ProfileFileHTML.replace("{username}", decodeURIComponent(userName));
        ProfileFileHTML = ProfileFileHTML.replace("{email}", decodeURIComponent(email));
        ProfileFileHTML = ProfileFileHTML.replace("{addr}", decodeURIComponent(addr));
        ProfileFileHTML = ProfileFileHTML.replace("{phone}", phone);
        ProfileFileHTML = ProfileFileHTML.replace("{pass}", pass);
        res.write(ProfileFileHTML);
        res.end();
      });
    }
  })
  .listen("7080", () => {
    console.log("http://localhost:7080/main.html");
  });
