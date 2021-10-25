import axios from "axios";
import React from "react";
import NoteCard from "./NoteCard";

const NoteCards = (props) => {
	const { notes, updateActiveNote, addNewNote } = props;

	const addNote = async () => {
		try {
			const addedNote = await axios.post("/api/notes");
			addNewNote(addedNote.data);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<section className="NoteCards">
			<div className="notesHeader">
				<button onClick={addNote}>Add</button>
			</div>
			<div className="cardContainer">
				{notes.map((note) => (
					<NoteCard
						note={note}
						updateActiveNote={updateActiveNote}
						key={note.id}
					/>
				))}
			</div>
		</section>
	);
};

export default NoteCards;
