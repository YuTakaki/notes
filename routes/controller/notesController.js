const db = require("../../db/knex");

const addNote = async (req, res) => {
	try {
		const { notes } = req.body;
		const addedNote = await db
			.insert({ notes })
			.returning("*")
			.into("notes");
		res.send(addedNote[0]);
	} catch (error) {
		console.log(error);
	}
};

const deleteNote = async (req, res) => {
	try {
		const { id } = req.params;
		await db.delete().from("notes").where({ id });
		res.send(id);
	} catch (error) {
		console.log(error);
	}
};

const updateNote = async (req, res) => {
	try {
		const { id } = req.params;
		const { notes } = req.body;
		const note = await db("notes")
			.update({ notes })
			.where({ id })
			.returning("*");
		res.send(note[0]);
	} catch (error) {
		console.log(error);
	}
};

const allNotes = async (req, res) => {
	try {
		const notes = await db("notes").select("*");
		res.send(notes);
	} catch (error) {
		console.log(error);
	}
};

const getNote = async (req, res) => {
	try {
		const { id } = req.params;
		const note = await db("notes")
			.select("*")
			.where({ id });
		res.send(note[0]);
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
