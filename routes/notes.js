var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Note = require('../models/Note.js');

/* GET notes listing */
router.get('/', function(req, res, next) {

	Note.find(function(err, notes) {
		if (err) return next(err);
		res.json(notes);
	});

});

/* POST note */
router.post('/', function(req, res, next) {

	Note.create(req.body, function(err, note) {
		if (err) return next(err);
		res.json(note);
	});

});

/* GET note by Id */
router.get('/:id', function(req, res, next) {

	Note.findById(req.params.id, function(err, note) {
		if (err) return next(err);
		res.json(note);
	});

});

/* PUT note by Id */
router.put('/:id', function(req, res, next) {

	Note.findByIdAndUpdate(req.params.id, req.body, function(err, note) {
		if (err) return next(err);
		res.json(note);
	});

});

/* DELETE note by Id */
router.delete('/:id', function(req, res, next) {

	Note.findByIdAndRemove(req.params.id, req.body, function(err, note) {
		if (err) return next(err);
		res.json(note);
	});

});

module.exports = router;