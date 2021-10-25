import axios from "axios";
import React, {
	useEffect,
	useState,
	memo,
	useRef,
} from "react";

const NoteTakingSpace = (props) => {
	const {
		activeNote,
		filterNotes,
		mapNotes,
		updateActiveNote,
	} = props;
	const [defaultInfo, setDefaultInfo] = useState({});
	const [editStatus, setEditStatus] = useState(false);
	const [notesInfo, setNotesInfo] = useState({});
	const textareasref = useRef();
	const summaryRef = useRef();
	useEffect(() => {
		if (activeNote !== "") {
			(async () => {
				try {
					const info = await axios.get(
						`/api/notes/${activeNote}`
					);
					setNotesInfo(info.data);
					setDefaultInfo(info.data);
					resetTextAreaHeight();
					summaryRef.current.focus();
				} catch (error) {
					console.log(error);
				}
			})();
		}
	}, [activeNote]);

	const deleteNote = async () => {
		try {
			await axios.delete(`/api/notes/${activeNote}`);
			filterNotes(activeNote);
			setDefaultInfo({});
			setNotesInfo({});
			setEditStatus(false);
		} catch (error) {
			console.log(error);
		}
	};

	const updateNotesInfo = (e) => {
		e.target.style.height = `16px`;

		if (!editStatus) setEditStatus(true);
		setNotesInfo({
			...notesInfo,
			[e.target.name]: e.target.value,
		});
		e.target.style.height = `${
			e.target.scrollHeight + 16
		}px`;
	};

	const updateNote = async (e) => {
		try {
			const updatedNote = await axios.patch(
				`/api/notes/${activeNote}`,
				notesInfo
			);
			mapNotes(updatedNote.data);
			setDefaultInfo(updatedNote.data);
			setEditStatus(false);
		} catch (error) {
			console.log(error);
		}
	};

	const reset = () => {
		setNotesInfo(defaultInfo);
		setEditStatus(false);
		resetTextAreaHeight();
	};

	const resetTextAreaHeight = () => {
		[...textareasref.current.children].forEach(
			(textarea) => {
				if ([...textarea.classList].includes("noteNotes")) {
					textarea.style.height = "200px";
				} else {
					textarea.style.height = "40px";
				}
			}
		);
	};

	return (
		<section
			className={`NoteTakingSpace ${
				activeNote && "sectionActive"
			}`}>
			<div className="options">
				{activeNote && (
					<>
						<button
							className="noteList"
							onClick={() => updateActiveNote("")}>
							Lists
						</button>
						<button className="del" onClick={deleteNote}>
							Delete
						</button>
						{editStatus && (
							<>
								<button
									className="edit"
									onClick={updateNote}>
									Save
								</button>
								<button className="reset" onClick={reset}>
									Reset
								</button>
							</>
						)}
					</>
				)}
			</div>
			<section className="card preview" ref={textareasref}>
				{activeNote && (
					<>
						<textarea
							value={notesInfo.summary}
							placeholder={
								!notesInfo.summary ? "Input Summary" : ""
							}
							name="summary"
							onChange={updateNotesInfo}
							ref={summaryRef}
							className="noteSummary"></textarea>
						<textarea
							value={notesInfo.notes}
							name="notes"
							onChange={updateNotesInfo}
							placeholder={
								!notesInfo.notes ? "Input Summary" : ""
							}
							className="noteNotes"></textarea>
					</>
				)}
			</section>
		</section>
	);
};

export default memo(NoteTakingSpace);
