const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');



const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes=require('./routes/contactus');
const successRoutes=require('./routes/success');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(successRoutes);



app.use((req, res, next) => {
  res.status(404).send(`<h1>Page not found`);
});











app.listen(3000);