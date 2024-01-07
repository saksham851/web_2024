//routes ka kaam yeah ha hmma issa controller sa map krana padega
//so basically import krna padega controller
const express=require('express');
const router=express.Router();
const {createTodo}=require("../controllers/createTodo");
const {getTodo,getTodoById}=require("../controllers/getTodo");
const {updateTodo}=require("../controllers/updateTodo");
const {deleteTodo}=require("../controllers/deleteTodo");
//Defining API routes...

//path ko mein na controller sa mapp kra deya ha
router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodos/:id",getTodoById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);

module.exports=router;

