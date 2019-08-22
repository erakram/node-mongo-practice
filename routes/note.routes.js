module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');
    // const users = require('../controllers/user.controller.js');
    

    // Create a new Note
    app.post('/notes', notes.createNote);
    app.post('/api/v1/create', notes.createUser);
    // Retrieve all Notes
    app.get('/notes', notes.findAllNotes);
    app.get('/api/v1/users', notes.findAllUsers);

    // Retrieve a single Note with noteId
    app.get('/notes/:noteId', notes.findOne);
    // app.get('/notes/:noteId', user.findOne);

    // Update a Note with noteId
    app.put('/notes/:noteId', notes.update);
    // app.put('/notes/:noteId', user.update);
    // Delete a Note with noteId
    app.delete('/notes/:noteId', notes.delete);
    // app.delete('/notes/:noteId', user.delete);
}