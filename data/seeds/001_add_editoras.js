exports.seed = function (knex){
  return knex("editoras").del()
  .then(function() {
      return knex("editoras").insert([
        {
            nome:"Companhia da Letras", cidade: "São Paulo", estado: "São Paulo", telefone: "3122-1554", rua: "Alameda Lorena, 1731 - Jardim Paulista", cep: "01426-000"
        }
        
      ]);
  });
}