const express=require('express');
const path=require('path');
const rootDir=require('../util/path');
const Route=express.Router();


Route.post('/success',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','success.html'));
});

module.exports=Route;