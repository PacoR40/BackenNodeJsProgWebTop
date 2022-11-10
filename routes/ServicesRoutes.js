const express = require('express');
const cors = require('cors');
const Service = require('../models/Services')
const app = express();
app.use(cors());

app.get('/listServices', cors(), function (req,res){
    Service.find({}, function(err, Service) {
        res.status(200).send(Service);
    }).sort({id:1})
});

app.get('/oneService/:_id', async function (req, res){
    try{
      let service = await Service.findById(req.params._id)
      res.json(service)
    }catch(error){
      console.log(error)
    }
});

app.post('/addService', (req, res)=> {
    Service.count({}, function (err, num) {
        const objService = {
            id: num+1,
            name: req.body['name'],
            description: req.body['description'],
            paymonth: req.body['paymonth'],
            image: req.body['image']
        }
        try {
            const newService = new Service(objService)
            newService.save().then((newDoc) => {
                res.send(newDoc)
            });
        } catch (error) {
            console.log(error)        
        }
    });
});

app.patch('/:_id', async (req, res)=>{
    try {
      const update = await Service.updateOne(
            { _id: req.params._id },
            { 
                $set: { 
                    name: req.body['name'],
                    description: req.body['description'],
                    paymonth: req.body['paymonth'],
                    image: req.body['image']
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
        const del = await Service.deleteOne({_id: req.params._id});
        res.json(del);
    }catch(err){
        res.json({message:err})
    }
});

module.exports = app