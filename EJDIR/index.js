const express=require("express");
const path = require("path");
const app=express();


//add static files

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"public")));

app.set("view engine","ejs");

// app.get("/",(req,res)=>{
//     res.send("This is the root.....");
// });


app.get("/",(req,res)=>{
    res.render("home.ejs");
});
const port=8080;
app.listen(port,()=>{
    console.log("listening pn port 8080");

});



//Simple instafram page



// app.get("/ig/:username",(req,res)=>{
//     const followers=["a","b","c","d"];
//     let{username } =req.params;
//     // console.log(username);
// res.render("instagram.ejs",{username,followers});
// })


// app.get("/ig/:username",(req,res)=>{
//     const instaData=require("./data.json");
//     console.log(instaData);
//     res.render("instagram.ejs");
// })
const instaData=require("./data.json");
app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    
    const data=instaData[username];
    // console.log(data);
    if(data){
 res.render("instagram.ejs",{data});
    }
   else{
res.render("error.ejs");
   }
   
});