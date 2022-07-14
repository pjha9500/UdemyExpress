const express=require('express');
const Route=express.Router();


Route.get('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>');
  });
  
module.exports=Route;