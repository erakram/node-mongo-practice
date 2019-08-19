module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    //Create new user
    app.post('/api/v1/create_user', users.create);

    //Retrive all users
    app.get('/api/v1/users', users.findAll);

    //Retrive a single user with userId

    app.get('/api/v1/users/:userId', users.findOne);

    //Update a user record with userId
    app.put('/api/v1/update_user/:userId', users.update);

    //Delete a user with userId
    app.delete('/app/v1/delete_user/:userId', user.delete);
}