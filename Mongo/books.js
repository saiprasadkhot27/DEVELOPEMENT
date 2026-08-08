const mongoose = require('mongoose');
//mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
.then(()=>{
    console.log("Connection Succesful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const bookSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:String,
    price:{
        type:Number,
        min:[1,"Price is too low"],
    
    },
    discount:{
        type:Number,
        default:0
    },
    catageory:{
        type:String,
        enum:['A','B']
    }

});

const book=mongoose.model("book",bookSchema);
book.findByIdAndUpdate('6a771a98133c5acf80c0a0da',{price:1000},{runValidators:true})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err.errors.price.properties.message);
});
// let book1=new book({
//     title:"Mathematics",
//     author :'"R.D.Sharma',
//     price:1200
// });

// book1.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

//default use 


// let book2=new book({
//     title:"Physics",
//     author :'"H.C.Varma',
//     price:1200
// });

// book2.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// let book2=new book({
//     title:"Physics",
//     author :'"H.C.Varma',
//     price:1200,
//     catageory:"A"
// });

// book2.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })