const User = require('../models/user.model.js')

//Create and save a new user
exports.create = (req, res) => {
    if(!req.body.content) {
        return res.status(400).send({
            message: "User can't be empty"
        })
    }
    //Create a user
    const user = new User({
        name: req.body.name || "Dummy Name",
        age: req.body.age,
        gender: req.body.gender,
        email: req.body.email,
        contact: req.body.contact
    });
    user.save().then(data =>{
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "A error occurred while creating a User."
        });
    });
};

exports.findAll = (req,res) => {
    User.find().then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "A error occurred white fetching a Users."
        });
    });
};

exports.findOne = (req, res) => {
    User.findById(req.params.userId).then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with Id" + req.params.userId
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind == 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        return res.status(500).send({
            message: "Error retrieving user with id " + req.params.userId
        });
    })
};

exports.update = (req, res) => {
    if(!req.body.content) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }

    User.findByIdAndUpdate(req.params.userId, {
        name: req.body.name || "Dummy Name",
        age: req.body.age,
        gender: req.body.gender,
        email: req.body.email,
        contact: req.body.contact
    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error updating user with id " + req.params.userId
        });
    });
};

exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.send({message: "User deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.userId
        });
    });

};