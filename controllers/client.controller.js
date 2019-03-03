const Client = require('../models/client.model');

exports.createClient = function(req, res){

    let client = new Client(req.body);
    client.save((err) => {
        if(err){
            console.log(err);
        }else{
            console.log('Client created :');
        }
        res.send(`Client created ! \n\n${client}`);
    });
}

exports.getClients = function(req, res){
    Client.find(function(err, clients){
        if(err){
            console.log(err);
        }
        res.json(clients);
    });
}

exports.getClient = function(req, res){
    let id = req.params.id;
    Client.findById(id, (err, client) => {
        res.json(client)
    })
}

exports.updateClient = function(req, res){
    Client.findById(req.params.id, (err, client) => {
        if (!client)
            res.send('Error getting the client!');
        else {
            if(err){
                status(400).send("Error when updating the client");
            }else{
                client.name = req.body.name;
                client.save().then( client => {
                res.json('Client updated successfully');
            });
        }
        }
    });
}

exports.deleteClient = function(req, res){
    Client.findByIdAndDelete({_id: req.params.id}, (err) => {
        if(err) res.json(err);
        else res.json('Client successfully removed');
    } )
}