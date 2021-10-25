const db = require("../../db/knex");

const addNote = async (req, res) => {
	try {
		const { notes } = req.body;
		const addedNote = await db
			.insert({ notes })
			.returning("*")
			.into("notes");
		res.send(addedNote);
	} catch (error) {
		console.log(error);
	}
};

const deleteNote = (req, res) => {
	try {
	} catch (error) {
		console.log(error);
	}
};

const updateNote = (req, res) => {
	try {
	} catch (error) {
		console.log(error);
	}
};

const allNotes = (req, res) => {
	try {
	} catch (error) {
		console.log(error);
	}
};

const getNote = (req, res) => {
	try {
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	addNote,
	deleteNote,
	updateNote,
	getNote,
	allNotes,
};
