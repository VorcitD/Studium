
exports.up = function(knex) {
    return knex.schema.createTable('videos',function (table){
        table.increments();
        table.string('url').notNullable();
        table.string('title').notNullable();

        table.string('modules_id').notNullable();

        table.foreign('modules_id').references('id').inTable('modules');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('videos');
};
