const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./routes/route');
const cors = require('cors');

dotenv.config({path:__dirname+'/.env'});
const uri = 'mongodb+srv://kajzuang:217231Jas!@cluster0.hxmku.mongodb.net/table?retryWrites=true&w=majority';
mongoose.connect(uri,()=>console.log('database connected'));

app.use(express.json());
app.use(cors);
app.use('/app',routes);
app.listen(4000, ()=>{console.log("Server Up")});