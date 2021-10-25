import axios from "axios";
import React, { useEffect, useState, memo } from "react";

const NoteTakingSpace = (props) => {
	const { activeNote, filterNotes, mapNotes } = props;
	const [defaultInfo, setDefaultInfo] = useState({});
	const [editStatus, setEditStatus] = useState(false);
	const [notesInfo, setNotesInfo] = useState({});
	useEffect(() => {
		console.log(activeNote);
		if (activeNote !== "") {
			(async () => {
				try {
					const info = await axios.get(
						`/api/notes/${activeNote}`
					);
					setNotesInfo(info.data);
					setDefaultInfo(info.data);
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
		} catch (error) {
			console.log(error);
		}
	};

	const updateNotesInfo = (e) => {
		if (!editStatus) setEditStatus(true);
		setNotesInfo({
			...notesInfo,
			[e.target.name]: e.target.value,
		});
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
	};

	return (
		<section className="NoteTakingSpace">
			{activeNote ? (
				<>
					<div className="options">
						<button className="del" onClick={deleteNote}>
							Delete
						</button>
						{editStatus && (
							<>
								<button
									className="edit"
									onClick={updateNote}>
									Update
								</button>
								<button className="edit" onClick={reset}>
									Reset
								</button>
							</>
						)}
					</div>

					<textarea
						value={notesInfo.summary}
						name="summary"
						onChange={updateNotesInfo}
						className="noteSummary"></textarea>
					<textarea
						value={notesInfo.notes}
						name="notes"
						onChange={updateNotesInfo}
						className="noteNotes"></textarea>
				</>
			) : (
				<div>select a note</div>
			)}
		</section>
	);
};

export default memo(NoteTakingSpace);
