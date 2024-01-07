//Model ek type ki class hoti ha jisme tum apni property aur behaviour define kar sakta ho
const mongoose=require('mongoose');
const todoSchema=new mongoose.Schema(
    {
        title:
        {
            type:String,
            require:true,
            maxLenght:50,
        },
        description:{
            type:String,
            require:true,
            maxLenght:50,
        },
        createdAt:
        {
            type:Date,
            require:true,
            default:Date.now(),
        },
        updateAt:
        {
            type:Date,
            require:true,
            default:Date.now(),
        }
    }
);
module.exports=mongoose.model("Todo",todoSchema);