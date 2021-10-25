exports.up = function (knex) {
	return knex.schema.createTable("notes", (table) => {
		table
			.uuid("id")
			.primary()
			.defaultTo(knex.raw("uuid_generate_v4()"));
		table.text("notes").notNullable();
		table.timestamp("date").defaultTo(knex.fn.now());
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("notes");
};
