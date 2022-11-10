const mongoose  = require("mongoose")

const serviceSchema = mongoose.Schema({
    id:{type:Number, require:true},
    name:{type:String, require:true},
    description:{type:String, require:true},
    paymonth:{type:Number, require:true},
    image:{type:String, require:true}
},{collection:'services',versionKey:false})

const Service = mongoose.model('Service',serviceSchema)

module.exports = Service