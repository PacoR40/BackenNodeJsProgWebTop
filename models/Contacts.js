const mongoose  = require("mongoose")

const contactSchema = mongoose.Schema({
    id:{type:Number, require:true},
    sender:{type:String, require:true},
    receiver:{type:String, require:true},
    message:{type:String, require:true},
    service:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Service',
        required:false
    }
},{collection:'contacts',versionKey:false})

const Contact = mongoose.model('Contact',contactSchema)

module.exports = Contact