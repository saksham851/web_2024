//import the model
const Todo=require("../models/Todo");   

//define route handler
//This type of exporst is called named export they can be multiple named export in the file but if default export can be one
exports.getTodo=async(req,res)=>{
    try{
         //fetch all todo iteams from database...
         const todos=await Todo.find({});

         //response
         res.status(200).json(
            {
                success:true,
                data:todos,
                message:'Entire todo data is fetched',
            }
         )
    }
    catch(err){
         console.error(err);
         res.status(500).json({
            success:false,
            error:err.message,
            message:"Server internal error",
         })
    }
}



exports.getTodoById=async(req,res)=>{
    try{
       //exctract todo by iteam by id
       const id=req.params.id;
       const todo=await Todo.findById({_id:id});

       //given id data not found 
       if(!todo)
       {
        return res.status(404).json({
            success:false,
            message:"No data found by given Id"
        })
       }
       //data found
       res.status(200).json({
        success:true,
        data:todo,
        message:`Todo ${id} data fetched successfully`,
       })
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