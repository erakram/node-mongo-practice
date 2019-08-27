module.exports = (app) => {
    const users = require('../controllers/user.controller.js');
    // const note = require('../controllers/user.controller.js');

    //Create new user
    app.post('/create', users.create);
    // app.post('/create', note.create);

    //Retrive all users
    app.get('/users', users.findAll);
    // app.get('/api/v1/users', note.findAll);
    //Retrive a single user with userId

    app.get('/user/:userId', users.findOne);
    // app.get('/api/v1/users/:userId', note.findOne);

    //Update a user record with userId
    app.put('/update_user/:userId', users.update);
    // app.put('/api/v1/update_user/:userId', note.update);
    //Delete a user with userId
    app.delete('/delete_user/:userId', users.delete);
    // app.delete('/app/v1/delete_user/:userId', note.delete);
}

