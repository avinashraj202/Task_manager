const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());
//imports routes
const postsRoutes=require('./routes/posts');

app.use('/posts', postsRoutes);





//Connect to DB
mongoose.connect(process.env.DB_CONNECTION , {useNewUrlParser: true}, ()=>{
     console.log('Connected to DB!')
 })

//Import Routers


//Routes
app.get('/',(req, res) => {
    res.send('hi! Welcome Home')
})





//Server
app.listen(3000);