
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_name: jake, password: password},
        {user_name: jess, password:password},
        {user_name: al, password: password}
      ]);
    });
};
