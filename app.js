const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine','ejs');
let o="",a=0,n="",inc=0;
app.get("/",function(req,res){
  res.render("index");
});
app.post("/",function(req,res){
  res.render('signup',{message: ""});
});
app.post("/newUser",function(req,res){
  if(req.body.pwd===req.body.cpwd){
    res.render("questions1");
  }
  else{
    res.render('signup',{message: "*Incorrect password!"});
  }
});
app.post("/check",function(req,res){
  res.render('questions1');
});
app.post("/b",function(req,res){
  o=req.body.occupation;
  a=parseInt(req.body.age);
  n=req.body.nationality;
  inc=parseInt(req.body.income);
  res.render("questions3.ejs");
});
app.get("/login",function(req,res){
  res.render("Signin");
});
app.post("/q3",function(req,res){
  console.log(req.body);
  res.render("benefits");
});
app.post("/ben",function(req,res){
  console.log(req.body);
  res.render("output");
});
app.get("/signup",function(req,res){
  res.render("signup",{message: ""});
});
app.listen(3000,function(){
  console.log("Server started on port 3000");
});
