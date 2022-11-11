const mongoose = require('mongoose');

mongoose.connect('mongodb.url');
const objConn = mongoose.connection

objConn.on('connected', ()=> {
    console.log("MongoDB Connection successfull")
})

objConn.on('error', (error) => {
    console.log('MongoDB connection failed..')
    console.log(error)
})
