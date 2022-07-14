const express = require('express');
const bodyparser=require('body-parser');
const app = express();

const adminRoute=require('./routes/admin.js');
const shopRoute=require('./routes/shop.js');



app.use(bodyparser.urlencoded({extended:false}));

app.use(adminRoute);
app.use(shopRoute);
app.use((req,res,next)=>{
    res.send('<h1>Page not found</h1>');
})
app.listen(3000);
