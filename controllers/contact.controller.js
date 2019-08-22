// const Contact = require('../models/contact.model.js')

// exports.create = (req, res) => {
//     if(!req.body.content) {
//         return res.status(400).send({
//             message: "Contact can't be empty"
//         })
//     }
//     const contact = new Contact({
//         name: req.body.name || "Dummy Name",
//         mobile: req.body.mobile,
//         designation: req.body.designation
//     });
//     contact.save().then(data =>{
//         res.send(data);
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "A error occurred while creating a Contact."
//         });
//     });
// };

// exports.findAll = (req,res) => {
//     Contact.find().then(contacts => {
//         res.send(contacts);
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "A error occurred white fetching a contact."
//         });
//     });
// };

// exports.findOne = (req, res) => {
//     Contact.findById(req.params.contactId).then(contact => {
//         if(!contact) {
//             return res.status(404).send({
//                 message: "Contact not found with Id" + req.params.contactId
//             });
//         }
//         res.send(contact);
//     }).catch(err => {
//         if(err.kind == 'ObjectId') {
//             return res.status(404).send({
//                 message: "Contact not found with id " + req.params.contactId
//             });
//         }
//         return res.status(500).send({
//             message: "Error retrieving contact with id " + req.params.contactId
//         });
//     })
// };

// exports.update = (req, res) => {
//     if(!req.body.content) {
//         return res.status(400).send({
//             message: "Contact content can not be empty"
//         });
//     }

//     Contact.findByIdAndUpdate(req.params.contactId, {
//         name: req.body.name || "Dummy Name",
//         mobile: req.body.mobile,
//         designation: req.body.designation
//     }, {new: true})
//     .then(contact => {
//         if(!contact) {
//             return res.status(404).send({
//                 message: "Contact not found with id " + req.params.contactId
//             });
//         }
//         res.send(contact);
//     }).catch(err => {
//         if(err.kind === 'ObjectId') {
//             return res.status(404).send({
//                 message: "Contact not found with id " + req.params.contactId
//             });                
//         }
//         return res.status(500).send({
//             message: "Error updating contact with id " + req.params.contactId
//         });
//     });
// };

// exports.delete = (req, res) => {
//     Contact.findByIdAndRemove(req.params.contactId)
//     .then(contact => {
//         if(!contact) {
//             return res.status(404).send({
//                 message: "Contact not found with id " + req.params.contactId
//             });
//         }
//         res.send({message: "Contact deleted successfully!"});
//     }).catch(err => {
//         if(err.kind === 'ObjectId' || err.name === 'NotFound') {
//             return res.status(404).send({
//                 message: "Contact not found with id " + req.params.contactId
//             });                
//         }
//         return res.status(500).send({
//             message: "Could not delete contact with id " + req.params.contactId
//         });
//     });

// };

const Contact = require('../models/contact.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    console.log("Create Data");

};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    console.log("Show all");

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