const express = require('express');
const path=require('path');
const bodyparser=require('body-parser');
const app = express();

const adminRoute=require('./routes/admin.js');
const shopRoute=require('./routes/shop.js');
const contactRoute=require('./routes/contactus');
const successRoute=require('./routes/success');



app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoute);
app.use(shopRoute);
app.use(contactRoute);
app.use(successRoute);



app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','pagenotfound.html'));
})
app.listen(3000);
