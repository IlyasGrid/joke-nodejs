const mongoose = require('mongoose');
const connectDb = (uri)=>{return mongoose.connect(uri)} 
mongoose.set('strictQuery', false);
module.exports ={connectDb}