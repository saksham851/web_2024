//import the model
//controller uses model to interact with db 
const Todo=require("../models/Todo");

//define route handler

exports.createTodo=async(req,res)=>{
     try{
          //extract title and description form reqest body
           const {title,description}=req.body;
           //abha ek object bnega createTodo ka aur usma yeah property assign karenga aur DB mein insert karenga
           const response=await Todo.create({title,description});
           //send a json flag with a success flag
           res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created Successfully'
            }
           )

     }
     catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.messag,
     })
     }
}