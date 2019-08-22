module.exports = (app) => {
    const contacts = require('../controllers/contact.controller.js');

    //Create new user
    app.post('/api/v1/create_contact', contacts.create);

    //Retrive all users
    app.get('/api/v1/contacts', contacts.findAll);

    //Retrive a single user with userId

    app.get('/api/v1/contact/:contactId', contacts.findOne);

    //Update a user record with userId
    app.put('/api/v1/update_contact/:contactId', contacts.update);

    //Delete a user with userId
    app.delete('/app/v1/delete_contact/:contactId', contacts.delete);
}