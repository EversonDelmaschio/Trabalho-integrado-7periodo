/**
 * Produtos.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    //Attributes

    nome:{type: 'string', required: true},
    descricao:{type: 'string'},
    custo:{type: 'number', required: true},
    tamanho:{type: 'string'},
    modelo:{type: 'string'},
    destaque:{type: 'boolean'},
    quantidade:{type: 'number', required: true},
    imagem:{type: 'string'},
    
    // Associations
    categoria:{
      model:'categoria',
      columnName:'categoriaId',
      required: true
    },
  },

  validar: function(){
    erros = new Array();
    if(!this.attributes.nome){
      erros.push({mensagem: 'O nome do produto deve ser preenchido!', sucesso: false});
    }

    if(this.attributes.custo === null){
      erros.push({mensagem: 'O custo do produto deve ser preenchido!', sucesso: false});
    }

    return erros;
  }

};

