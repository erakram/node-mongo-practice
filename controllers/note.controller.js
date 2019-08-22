// const Note = require('../models/note.model.js');


// // Create and Save a new Note
// exports.create = (req, res) => {
//     console.log("jjjjjs");
//     // Validate request
//     if(!req.body.content) {
//         console.log("Note In");
//         return res.status(400).send({
//             message: "Note content can not be empty"
//         });
//     }

//     // Create a Note
//     const note = new Note({
//         title: req.body.title || "Untitled Note", 
//         content: req.body.content
//     });

//     // Save Note in the database
//     note.save()
//     .then(data => {
//         res.send(data);
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "Some error occurred while creating the Note."
//         });
//     });
// };

// // Retrieve and return all notes from the database.
// exports.findAll = (req, res) => {
//     Note.find()
//     .then(notes => {
//         res.send(notes);
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "Some error occurred while retrieving notes."
//         });
//     });
// };

// // Find a single note with a noteId
// exports.findOne = (req, res) => {
//     Note.findById(req.params.noteId)
//     .then(note => {
//         if(!note) {
//             return res.status(404).send({
//                 message: "Note not found with id " + req.params.noteId
//             });            
//         }
//         res.send(note);
//     }).catch(err => {
//         if(err.kind === 'ObjectId') {
//             return res.status(404).send({
//                 message: "Note not found with id " + req.params.noteId
//             });                
//         }
//         return res.status(500).send({
//             message: "Error retrieving note with id " + req.params.noteId
//         });
//     });
// };

// // Update a note identified by the noteId in the request
// exports.update = (req, res) => {
//     // Validate Request
//     if(!req.body.content) {
//         return res.status(400).send({
//             message: "Note content can not be empty"
//         });
//     }

//     // Find note and update it with the request body
//     Note.findByIdAndUpdate(req.params.noteId, {
//         title: req.body.title || "Untitled Note",
//         content: req.body.content
//     }, {new: true})
//     .then(note => {
//         if(!note) {
//             return res.status(404).send({
//                 message: "Note not found with id " + req.params.noteId
//             });
//         }
//         res.send(note);
//     }).catch(err => {
//         if(err.kind === 'ObjectId') {
//             return res.status(404).send({
//                 message: "Note not found with id " + req.params.noteId
//             });                
//         }
//         return res.status(500).send({
//             message: "Error updating note with id " + req.params.noteId
//         });
//     });
// };

// // Delete a note with the specified noteId in the request
// exports.delete = (req, res) => {
//     Note.findByIdAndRemove(req.params.noteId)
//     .then(note => {
//         if(!note) {
//             return res.status(404).send({
//                 message: "Note not found with id " + req.params.noteId
//             });
//         }
//         res.send({message: "Note deleted successfully!"});
//     }).catch(err => {
//         if(err.kind === 'ObjectId' || err.name === 'NotFound') {
//             return res.status(404).send({
//                 message: "Note not found with id " + req.params.noteId
//             });                
//         }
//         return res.status(500).send({
//             message: "Could not delete note with id " + req.params.noteId
//         });
//     });
// };
const Contact = require('../models/contact.model.js');
const Note = require('../models/note.model.js');
const User = require('../models/user.model.js');
require('../routes/note.routes.js');



// Create and Save a new Note
exports.createNote = (req, res) => {
    console.log("Create Note");
    // if(!req.body.content) {
    //     console.log("Note In");
    //     return res.status(400).send({
    //         message: "Note content can not be empty"
    //     });
    // }

    // // Create a Note
    // const note = new Note({
    //     title: req.body.title || "Untitled Note", 
    //     content: req.body.content
    // });

    // // Save Note in the database
    // note.save()
    // .then(data => {
    //     res.send(data);
    // }).catch(err => {
    //     res.status(500).send({
    //         message: err.message || "Some error occurred while creating the Note."
    //     });
    // });

};

exports.createUser = (req, res) => {
    console.log("Create User");
    if(!req.body.name) {
        console.log(req.body.name);
        console.log("IF");
        return res.status(400).send({
            message: "User can't be empty"
        })
    }
    console.log("Out");

    const contact = new Contact(req.body.contact);
    contact.save().then(data => {
        console.log("Contact Saved");
        res.send(data);
    }).catch(err => {
        console.log("Contact Not saved");
        console.log(err);
        res.status(500).send({
            message: err.message || "ERROR"
        });
    });
    const user = new User(req.body)
    user.contact = contact._id
    user.save().then(data => {
        console.log("User Saved");
        res.send(data);
    }).catch(err => {
        console.log("User Not saved");
        console.log(err);
        res.status(500).send({
            message: err.message || "ERROR"
        });
    });
};


// Retrieve and return all notes from the database.
exports.findAllNotes = (req, res) => {
    console.log("Show all Notes");

};
exports.findAllUsers = (req, res) => {
    console.log("Show all Users");
    User.find().then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "A error occurred white fetching a Users."
        });
    });

};
// Find a single note with a noteId
exports.findOne = (req, res) => {
    console.log("Show one");

};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    console.log("Update");

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    console.log("delete");
};