const mongoose = require('mongoose');
const dotenv = require('dotenv');


const DB = process.env.DATABASE;

mongoose.connect(DB)
.then(() => console.log('Connected!'))
.catch((e)=>{
    console.log(e);
})