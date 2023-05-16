exports.seed = function (knex){
  return knex("autores").del()
  .then(function() {
      return knex("autores").insert([
        {
            nome:"Clarice", sobrenome: "Lispector", idade: 57, data_nascimento: "10/12/1920", sexo: "feminino", telefone: "9999-9999"
        }
        
      ]);
  });
}

