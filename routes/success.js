const express=require('express');
const path=require('path');
const rootDir=require('../util/path');
const Route=express.Router();

const successcontrollers=require('../controllers/success')
Route.post('/success',successcontrollers.succespage);

module.exports=Route;