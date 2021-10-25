const express = require("express");
require("dotenv").config();
const path = require("path");

const app = express();

if (process.env.NODE_ENV === "production") {
	app.use(
		express.static(path.join(__dirname, "client/build"))
	);
}

const port = process.env.PORT || 4000;

app.listen(port, () =>
	console.log(`listening to port ${port}`)
);
