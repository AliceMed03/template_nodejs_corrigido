/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('autores', (table)=> {
      table.increments();
      table.string("nome",20).notNullable();
      table.string("sobrenome",80).notNullable();
      table.integer("idade",3).notNullable();
      table.string("data_nascimento",10).notNullable();
      table.string("sexo",9).notNullable();
      table.string("telefone",15).notNullable();
    });
  };
  exports.down = function(knex) {
    return knex.schema.dropTable("autores");
  };
  