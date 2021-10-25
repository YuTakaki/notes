exports.up = function (knex) {
	return knex.schema.table("notes", (table) => {
		table.string("notes").nullable().alter();
	});
};

exports.down = function (knex) {
	return knex.schema.table("notes", (table) => {
		table.string("notes").notNullable().alter();
	});
};
