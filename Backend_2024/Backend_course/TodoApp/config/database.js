const mongoose=require('mongoose');

require("dotenv").config(); 
const dbConnect=()=>{
   //yeah url tho env ka under ha tho yeah preocess obj ka under kesa aaya so basically hmm na ussa feed kiya
   //npm i dotenv then line no 3. sa feed ho gya...
   mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
   })
   .then(()=>{console.log("DB connection sussessfull")})
   .catch((error)=>{
    console.log("Issue in DB connection");
    console.error(error.message);
    process.exit(1);
     });
}

module.exports=dbConnect;