const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://paco40:2KPKacP767Pnuxbx@cluster0.zbtwo.mongodb.net/services');
const objConn = mongoose.connection

objConn.on('connected', ()=> {
    console.log("MongoDB Connection successfull")
})

objConn.on('error', (error) => {
    console.log('MongoDB connection failed..')
    console.log(error)
})