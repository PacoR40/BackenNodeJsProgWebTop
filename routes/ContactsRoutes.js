const express = require('express');
const cors = require('cors');
const Contact = require('../models/Contacts')
const app = express();
app.use(cors());

app.get('/listContacts', cors(), function (req,res){
    Contact.find({}, function(err, Contact) {
        res.status(200).send(Contact);
    }).sort({id:1})
});

app.get('/oneContact/:_id', async function (req, res){
    try{
      let contact = await Contact.findById(req.params._id)
      res.json(contact)
    }catch(error){
      console.log(error)
    }
})

app.post('/addContact', (req, res)=> {
    Contact.count({}, function (err, num) {
        const objContact = {
            id: num+1,
            sender: req.body['sender'],
            receiver: req.body['receiver'],
            message: req.body['message'],
            service: req.body['service']
        }
        try {
            const newContact = new Contact(objContact)
            newContact.save().then((newDoc) => {
                res.send(newDoc)
            });
        } catch (error) {
            console.log(error)        
        }
    });
});

app.patch('/:_id', async (req, res)=>{
    try {
      const update = await Contact.updateOne(
            { _id: req.params._id },
            { 
                $set: { 
                    sender: req.body['sender'],
                    receiver: req.body['receiver'],
                    message: req.body['message'],
                    service: req.body['service']
                } 
            }
        );
        res.json(update); 
    } catch (err) {
      res.json({ message:err});
    }
});

app.delete('/:_id', async (req,res)=>{
    try{
        const del = await Contact.deleteOne({_id: req.params._id});
        res.json(del);
    }catch(err){
        res.json({message:err})
    }
});

module.exports = app