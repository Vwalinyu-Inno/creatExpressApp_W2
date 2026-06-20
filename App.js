require('dotenv').config();
const express=require('express');
const app=express();
const PORT=process.env.PORT || 3000;

app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url} ${new Date()}`);
    next();
});

app.get('/',(req,res)=>{
    res.send('My week 2 API');
});
 app.use(express.json());

app.post('/user/',(req,res)=>{
const {name,email}=req.body;
if (!name||!email){
    return res.status(400).send("Name and Email required");
}
if (!email.includes('@')){
    return res.status(400).send("invalid email");
}

res.send(`Hello ${name} !`);
});

app.get('/user/:id',(req,res)=>{
const id=req.params.id;
console.log(id);
res.send(`User ID is : ${id}`);
});

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});
