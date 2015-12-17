var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
	body: String
});

module.exports = mongoose.model('Note', NoteSchema);