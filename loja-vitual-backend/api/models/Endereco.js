module.exports = {
    attributes:{
        cep: {type: 'string', required: true},
        rua: {type: 'string'},
        bairro: {type: 'string'},
        cidade: {type: 'string'},
        estado: {type: 'string'},
        uf: {type: 'string'},

        // cliente:{collection: 'cliente', via: 'endereco'}
    }
}