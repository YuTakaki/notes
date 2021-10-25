const express = require("express");
require("dotenv").config();
const path = require("path");
const db = require("./db/knex");
const config = require("./knexfile")[process.env.NODE_ENV];

const app = express();

if (process.env.NODE_ENV === "production") {
	app.use(
		express.static(path.join(__dirname, "client/build"))
	);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//notes api
app.use("/api/notes", require("./routes/notes.js"));

const port = process.env.PORT || 4000;

(async () => {
	try {
		await db.migrate.latest(config);
		app.listen(port, () =>
			console.log(`listening to port ${port}`)
		);
	} catch (error) {
		console.log(error);
	}
})();
