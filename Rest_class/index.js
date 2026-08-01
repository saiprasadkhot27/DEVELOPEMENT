
const { clear } = require("console");
const express =require("express");
const app=express();
const port=8080;
const path=require("path");
const { v4:uuidv4}=require("uuid");
const methodOverride = require("method-override");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));





app.set("view engine","ejs");

app.set("views",path.join(__dirname,"views"));
//app.use("views",path.join(__dirname,"public"));
let posts=[
    {
        id:uuidv4(),
    username:"Apna College",
    content:"I Love Coding !"
},
{
    id:uuidv4(),
   username:"Saiprasad",
    content:"Hard work is importanrt...."
},
{
    id:uuidv4(),
       username:"Sourabh Yadav",
    content:"This is a good player..."
}
];

app.get("/posts", (req, res) => {
    res.render("index", { posts });
});
// res.send("Server working well");



app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{

    //console.log(req.body);
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content});
    //res.send("post request working.......");
    res.redirect("./posts");
    
});


app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    // console.log(id);
    let post=posts.find((p)=>id === p.id);
    // console.log(post);
    res.render("show.ejs",{post});
   // res.send("Request working...");
});


app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newContent=req.body.content;
    console.log(newContent);
    let post=posts.find((p)=>id === p.id);
    post.content=newContent;
    // console.log(post);
    // res.send("Patch request recieved...");
  res.redirect("/posts");
});
app.get("/posts/:id/edit",(req,res)=>{
     let {id}=req.params;
      let post=posts.find((p)=>id === p.id);
     res.render("edit.ejs", { post });
 

});



app.delete("/posts/:id",(req,res)=>{
    let { id } = req.params;
    posts = posts.filter((p) => p.id !== id);
    res.redirect("/posts");
});

app.listen(port,()=>{
    console.log("Listenign on port no 8080");

});








//index route

// const { clear } = require("console");
// const express =require("express");
// const app=express();
// const port=8080;
// const path=require("path");
// app.use(express.urlencoded({extended:true}));
// app.use(express.static(path.join(__dirname, "public")));
// app.set("view engine","ejs");

// app.set("views",path.join(__dirname,"views"));
// //app.use("views",path.join(__dirname,"public"));
// let posts=[
//     {
//     username:"Apna College",
//     content:"I Love Coding !"
// },
// {
//    username:"Saiprasad",
//     content:"Hard work is importanrt...."
// },
// {
//    username:"Sourabh Yadav",
//     content:"This is a good player..."
// }
// ];

// app.get("/posts", (req, res) => {
//     res.render("index", { posts });
// });
// // res.send("Server working well");

// app.listen(port,()=>{
//     console.log("Listenign on port no 8080");

// });






//Basic setup code...

// const { clear } = require("console");
// const express =require("express");
// const app=express();
// const port=8080;
// const path=require("path");
// app.use(express.urlencoded({extended:true}));
// app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"public"));

// app.get("/",(req,res)=>{
// res.send("Server working well");
// })
// app.listen(port,()=>{
//     console.log("Listenign on port no 8080");

// });
