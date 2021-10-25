const db = require("../../db/knex");

const addNote = async (req, res) => {
	try {
		const { note } = req.body;
		const addedNote = await db
			.insert({ note })
			.returning("*")
			.into("notes");
		console.log(addedNote);
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
