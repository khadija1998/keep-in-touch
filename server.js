const mongoose = require('mongoose');
const express = require('express');
const bodyParser= require('body-parser')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
// const router = express.Router();

//import routes 

app.use('/user', require('./routes/users'))


app.use(express.json())

require('dotenv').config();

const db = process.env.db;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
.then(() => console.log('mongodb is connected'))
.catch((err) => console.log(err.message));
 const PORT =  process.env.PORT ||5000


app.listen(PORT, ()=>  console.log(`app running on ${PORT}port`));


