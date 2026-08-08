const mongoose = require('mongoose');
//mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
.then(()=>{
    console.log("Connection Succesful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const userSchema =new mongoose.Schema({
    name:String,
    email:String,
    age:Number

});
const user=mongoose.model("User",userSchema);
//const Employee=mongoose.model("Employee",userSchema);
// const user1=new user({name:"Saiprasad",age:21,eamil:"sai@gamil.com"});
// user1.save();

// const user2=new user({name:"Souarabh",age:21,email:"sourabh@gamil.com"});
// user2.save().then(()=>{
//     console.log("Connection Succesful");
// }).catch((err)=>{
//     console.log(err);
// })

// user.insertMany([{
//    name:"Sarthak",age:20,email:"sarthak@gamil.com" 
// },
// {name:"Sanket",age:20,email:"sanket@gamil.com" }]).then((res)=>{
//     console.log(res);
// });

//find 

// user.find({})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

//find with condition

// user.findOne({age:{$gte:21}})
// .then((res)=>{
//      console.log(res);
//     //  console.log(res[0]);
//     //  console.log(res[0].name);
// })
// .catch((err)=>{
//     console.log(err);
// });

//findById

// user.findById({_id :"6a76d8cf44cb3576f4ff452a"})
// .then((res)=>{
//      console.log(res);
    
// })
// .catch((err)=>{
//     console.log(err);
// });

//update

// user.updateOne({name:"Saiprasad"},{age:22}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

//update many

// user.updateMany({age:{$gte:21}},{age:25}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

//find and update

// user.findOneAndUpdate({age:{$gte:21}},{age:23},{new:true}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });


//find by id and update


// user.findByIdAndUpdate({_id:'6a76d8cf44cb3576f4ff452a' },{age:21},{new:true}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

//delete one

// user.deleteOne({name:"Sanket" }).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

//delete many

// user.deleteMany({age:{$lt:21} }).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });


// user.insertMany([{
//    name:"Sarthak",age:20,email:"sarthak@gamil.com" 
// },
// {name:"Sanket",age:20,email:"sanket@gamil.com" }]).then((res)=>{
//     console.log(res);
// });



//show what to delete

//  user.findOneAndDelete({age:{$lt:21} }).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });



 user.findByIdAndDelete({_id:'6a7712fbd7d8baa73ae0fc78'}).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});

