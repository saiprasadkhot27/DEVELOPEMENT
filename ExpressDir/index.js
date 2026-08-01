
const express = require("express");
const app = express();

const port = 3000;

app.listen(port, () => {
    console.log("App is listening on port 3000");
});

// app.use((req, res) => {
//     console.log("Request received...");
//     // res.send("Hello Express");
//     // res.send({
//     //     fruits:"mango",
//     //     color:"Yellow"
//     // });
//     res.send("<H1>This is list of fruits</H1><ul><li>Mango</li><li>Apple</li></ul>");
// });
app.get("/",(req,res)=>{
res.send("I am root");
});

//more username is available then use after lash whatever is threated as varaible.


// app.get("/:username",(req,res)=>{

//     const {username}=req.params;

//     console.log(req.params);
// res.send(`Welcome to page of @${username}.`);
// });


//Query String


app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send("No Result");
})

// app.get("/apple",(req,res)=>{
//     res.send("You contact apple path...");

// });
// app.get("/mango",(req,res)=>{
//     res.send("You contact mango path...");

// });
// app.get(/.*/,(req,res)=>{
//     res.send("This is page is not exist...");
// });

