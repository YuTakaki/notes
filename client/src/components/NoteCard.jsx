import React from "react";

const NoteCard = (props) => {
	const { note, updateActiveNote } = props;
	return (
		<article
			className="card"
			onClick={() => updateActiveNote(note.id)}>
			<h2>{note.summary}</h2>
			<p>{note.notes}</p>
		</article>
	);
};

export default NoteCard;
