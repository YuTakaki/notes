exports.up = function (knex) {
	return knex.schema.table("notes", (table) => {
		table.string("notes").nullable().alter();
		table.string("summary");
	});
};

exports.down = function (knex) {
	return knex.schema.table("notes", (table) => {
		table.string("notes").notNullable().alter();
	});
};
