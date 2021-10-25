require("dotenv").config();

module.exports = {
	development: {
		client: process.env.CLIENT,
		connection: {
			database: process.env.DATABASE,
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			host: process.env.HOST,
			port: process.env.PG_PORT,
		},
		migrations: {
			directory: `${__dirname}/db/migrations`,
		},
	},
	production: {
		client: "postgresql",
		connection: process.env.DATABASE_URL,
		pool: {
			min: 2,
			max: 10,
		},
		directory: `${__dirname}/db/migrations`,
	},
};
