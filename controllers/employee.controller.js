const Employee = require('../models/employe.model');

exports.createEmployee = function(req, res){

    let employe = new Employee(req.body);
    employe.save((err) => {
        if(err){
            console.log(err);
        }else{
            console.log('Employee created :');
        }
        res.send(`Employee created ! \n\n${employe}`);
    });
}

exports.getEmployees = function(req, res){
    Employee.find(function(err, employes){
        if(err){
            console.log(err);
        }
        res.json(employes);
    });
}

exports.getEmployee = function(req, res){
    let id = req.params.id;
    Employee.findById(id, (err, employe) => {
        res.json(employe)
    })
}

exports.updateEmployee = function(req, res){
    Employee.findById(req.params.id, (err, employe) => {
        if (!employe)
            res.send('Error getting the employe!');
        else {
            if(err){
                status(400).send("Error when updating the employe");
            }else{
                employe.name = req.body.name;
                employe.save().then( employe => {
                res.json('Employee updated successfully');
            });
        }
        }
    });
}

exports.deleteEmployee = function(req, res){
    Employee.findByIdAndDelete({_id: req.params.id}, (err) => {
        if(err) res.json(err);
        else res.json('Employee successfully removed');
    } )
}