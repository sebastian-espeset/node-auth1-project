
exports.up = function(knex) {
  return knex.schema
    .createtable("users",table=>{
        table.increments("user_id")
        table.string("user_name",128).notNullable().unique();
        table.string("password",128).notNullable();

    })
};

exports.down = function(knex) {
  return knex.schema    
    .dropTableIfExists("users")
};
