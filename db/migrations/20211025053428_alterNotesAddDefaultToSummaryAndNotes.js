exports.up = function (knex) {
	return knex.schema.table("notes", (table) => {
		table.string("summary").defaultTo("").alter();
		table.string("notes").defaultTo("").alter();
	});
};

exports.down = function (knex) {
	return knex.schema.table("notes", (table) => {
		table.string("notes").nullable().alter();
		table.string("summary").alter();
	});
};
