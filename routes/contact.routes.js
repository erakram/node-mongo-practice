module.exports = (app) => {
    const users = require('../controllers/contact.controller.js');

    //Create new user
    app.post('/api/v1/create_contact', users.create);

    //Retrive all users
    app.get('/api/v1/contacts', users.findAll);

    //Retrive a single user with userId

    app.get('/api/v1/contact/:contactId', users.findOne);

    //Update a user record with userId
    app.put('/api/v1/update_contact/:contactId', users.update);

    //Delete a user with userId
    app.delete('/app/v1/delete_contact/:contactId', user.delete);
}