
exports.up = function(knex) {
    return knex.schema.createTable('courses',function (table){
        table.increments();

        table.string('name').notNullable();
        table.string('description').notNullable();
        table.string('author').notNullable();
        table.decimal('price').notNullable();
        table.decimal('numClasses').notNullable();
    });
  };
  
  exports.down = function(knex) {
    knex.schema.dropTable('courses');
  };
  