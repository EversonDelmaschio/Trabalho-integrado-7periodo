/**
 * Cliente.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    // PRIMITIVES

    nome: {type: 'string', required: true},
    sobrenome: {type: 'string', required: true},
    email: {type: 'string', required: true, unique: true},
    senha: {type: 'string', required: true, encrypt: true},
    dataNascimento: {type: 'string'},
    dataCadastro: {type: 'string', defaultsTo: new Date().toISOString()},
    ativo: {type: 'boolean', defaultsTo: true},
    cpf: {type: 'string'},
    telefone: {type: 'string'},

    // ASSOCIATIONS
    endereco: {
      model:'endereco',
      columnName:'enderecoId',
      // required: true
    }

  },

};

