const express = require('express'); //This line contains express module
const app = express(); //assigning express function to app variable
const port = 5050; //port number should be greater than 5000
const database = require('mysql'); //This line contains mysql module
const ejs = require('ejs'); //This line contains ejs module
const bodyParser = require('body-parser'); //This line contains body-parser module
// const res = require('express/lib/response');

let sqlResponse ;

//This line give access to use publc folder
app.use(express.static('public'));


//Connetting with database
let connection = database.createConnection({
    host : 'localhost',
    user : 'root',
    password : "",
    database : 'dummyDB',
})


//This line give access to ejs files
app.set("view engine","ejs");
  

connection.connect((error) => {
    if(error){
    console.log(error);
    }
    else{
        let sql = 'SELECT * FROM `Invoice_App` WHERE 1';
        connection.query(sql,(error, result) => {   
        sqlResponse = (result[0]);
        sqlResponse = (JSON.parse(sqlResponse.JsonData));
        // response.json(result);
        })
    }
})

var urlencodedParser = bodyParser.urlencoded({extended : false});
app.use(bodyParser.json());
app.post('/index',urlencodedParser,(req,res) => {
    console.log((req));
})

app.post("/details",urlencodedParser,(req,res) => {
    sqlResponse.map((ele) => { if(ele.id==req.body.id)ele.status="paid"});
    let sql = `UPDATE Invoice_App  SET JsonData = '${JSON.stringify(sqlResponse)}' WHERE 1`;
        connection.query(sql,(error, result) => {   
            if(error){
                console.log(error);
            }
            else{
                console.log(result);
            }
        })
          
})


app.get("/index",(request,response) =>{
    let Img = {
        jsScript : "js/home.js",
        cssSheet : 'css/home.css',
        JsonData : sqlResponse,
        logoImg : 'images/logo.png',
        sunImg : 'images/sun.png',
        moonImg : 'images/moon.png',
        avatarImg : 'images/image-avatar.jpg',
        rightArrowImg : 'images/icon-arrow-right.svg',
    }
    response.render("home",{Img});
    // response.send("Database Connected");
})

app.get("/details",(request,response) =>{
    let obj = {
        JsonData : sqlResponse,
        res : request,
        js : "js/details.js",
        css : 'css/details.css',
        logoImg : 'images/logo.png',
        sunImg : 'images/sun.png',
        moonImg : 'images/moon.png',
        avatarImg : 'images/image-avatar.jpg',
        leftArrowImg : 'images/icon-arrow-left.svg',
    }
    response.render("details",{obj})
})





// this line should be always at the bottom of the scrpit
app.listen(port, () => console.log("Listening..." , port));