const express=require('express');
const path=require('path');
const rootDir=require('../util/path');
const router=express.Router();
router.get('/add-product', (req, res, next) => {

    res.sendFile(path.join(rootDir,'views','add-product.html'))

    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form>');
  });
  
  router.post('/add-product',(req,res,next)=>{
      console.log(Object.assign({},req.body));
      res.redirect('/');
  })


module.exports=router;