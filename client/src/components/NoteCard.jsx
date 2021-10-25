import React from "react";

const NoteCard = (props) => {
	const { note, updateActiveNote, activeNote } = props;
	return (
		<article
			className={`card ${
				activeNote === note.id && "active"
			}`}
			onClick={() => updateActiveNote(note.id)}>
			{!note.summary && !note.notes ? (
				<h1 className="empty">Empty Note</h1>
			) : (
				<>
					<h2>{note.summary}</h2>
					<p>{note.notes}</p>
				</>
			)}
		</article>
	);
};

export default NoteCard;
