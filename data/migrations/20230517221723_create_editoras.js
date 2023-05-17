/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('editoras', (table)=> {
      table.increments();
      table.string("nome",50).notNullable();
      table.string("cidade",20).notNullable();
      table.string("estado",20).notNullable();
      table.string("telefone",15).notNullable();
      table.string("rua",50).notNullable();
      table.string("CEP",8).notNullable();
    });
  };
  exports.down = function(knex) {
    return knex.schema.dropTable("editoras");
  };
  