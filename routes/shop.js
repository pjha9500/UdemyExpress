const express=require('express');
const path=require('path');
const rootDir=require('../util/path');
const Route=express.Router();


Route.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','shop.html'));
  });
  
module.exports=Route;