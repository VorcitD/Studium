
exports.up = function(knex) {
    return knex.schema.createTable('videos',function (table){
        table.increments();
        table.string('url').notNullable();
        table.string('title').notNullable();

        table.string('Course_id').notNullable();

        table.foreign('Course_id').references('id').inTable('course');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('videos');
};
