const express=require('express');
const app=express();

const bodyParse=require('body-parser');
app.use(bodyParse.json());

app.listen(3000,()=>{
    console.log("severe started at port no. 3000")
})

app.get('/',(req,res)=>{
      res.send("hello jee");
})

app.post('/api/cars',(req,res)=>{
    const {name,brand} =req.body;
    console.log(name);
    console.log(brand);
    res.send('Car submitted succesfully.');
})


const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
})


.then(()=>
{
    console.log("Connection successfull");
})
.catch((error)=>
{
  console.log("recieved an error");
})
