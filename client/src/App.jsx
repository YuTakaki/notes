import { useEffect, useState } from "react";
import NoteCards from "./components/NoteCards";
import NoteTakingSpace from "./components/NoteTakingSpace";
import "./styles/app.scss";
import axios from "axios";

const App = () => {
	const [notes, setNotes] = useState([]);
	const [activeNote, setActiveNote] = useState("");
	useEffect(() => {
		(async () => {
			try {
				const noteResponse = await axios.get("/api/notes");
				setNotes(noteResponse.data);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	const updateActiveNote = (id) => {
		setActiveNote(id);
	};

	const filterNotes = (id) => {
		setNotes(notes.filter((note) => note.id !== id));
		setActiveNote("");
	};

	const mapNotes = (updatedNote) => {
		setNotes(
			notes.map((note) =>
				note.id === updatedNote.id ? updatedNote : note
			)
		);
	};

	const addNewNote = (note) => {
		setNotes([note, ...notes]);
		setActiveNote(note.id);
	};
	return (
		<div className="App">
			<main className="notesContainer">
				<NoteCards
					notes={notes}
					updateActiveNote={updateActiveNote}
					addNewNote={addNewNote}
				/>

				<NoteTakingSpace
					activeNote={activeNote}
					filterNotes={filterNotes}
					mapNotes={mapNotes}
				/>
			</main>
		</div>
	);
};

export default App;
