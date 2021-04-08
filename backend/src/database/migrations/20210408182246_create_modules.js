exports.up = function(knex) {
    return knex.schema.createTable('modules',function (table){
        table.increments();
        table.string('title').notNullable();

        table.string('course_id').notNullable();

        table.foreign('course_id').references('id').inTable('courses');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('modules');
};