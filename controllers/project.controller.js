const Project = require('../models/project.model');

exports.createProject = function(req, res){

    let project = new Project(req.body);
    project.save((err) => {
        if(err){
            console.log(err);
        }else{
            console.log('Project created :');
        }
        res.send(`Project created ! \n\n${project}`);
    });
}

exports.getProjects = function(req, res){
    Project.find(function(err, projects){
        if(err){
            console.log(err);
        }
        res.json(projects);
    });
}

exports.getProject = function(req, res){
    let id = req.params.id;
    Project.findById(id, (err, project) => {
        res.json(project)
    })
}

exports.updateProject = function(req, res){
    Project.findById(req.params.id, (err, project) => {
        if (!project)
            res.send('Error getting the project!');
        else {
            if(err){
                status(400).send("Error when updating the project");
            }else{
                project.name = req.body.name;
                project.save().then( project => {
                res.json('Project updated successfully');
            });
        }
        }
    });
}

exports.deleteProject = function(req, res){
    Project.findByIdAndDelete({_id: req.params.id}, (err) => {
        if(err) res.json(err);
        else res.json('Project successfully removed');
    } )
}