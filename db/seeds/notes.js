exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("notes")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("notes").insert([
				{ notes: "watch netflix", summary: "watch" },
				{ notes: "study next.js", summary: "study" },
				{
					notes: "practice tech talk",
					summary: "practice",
				},
			]);
		});
};
