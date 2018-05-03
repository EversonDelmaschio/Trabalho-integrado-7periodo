/**
 * ProdutosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    find: function(req, res){
        Produto.find({}).exec((err, produtos) => {
            console.log("Find ->");
            if(err) res.status(500).send({error: 'Erro ao buscar produtos'});
            lista = Produto.validar();
            res.status(200).send(produtos);
        });
    },

    create: async function(req, res){
        let nome = req.param('nome');
        let quantidade = req.param('quantidade');
        let custo = req.param('custo');
        let descricao = req.param('descricao');
        let categoriaId = 1;

        var produtoCriado = await Produto.create({nome, quantidade, custo, categoria: categoriaId}).fetch();
        if(!produtoCriado){return res.status(500).send({error: 'Erro ao criar um novo produto'})}
        return res.json(produtoCriado);
    }
};

