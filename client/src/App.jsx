import NoteCards from "./components/NoteCards";
import NoteTakingSpace from "./components/NoteTakingSpace";

const App = () => {
	return (
		<div className="App">
			<main>
				<div className="notesContainer">
					<NoteCards />
					<NoteTakingSpace />
				</div>
			</main>
		</div>
	);
};

export default App;
