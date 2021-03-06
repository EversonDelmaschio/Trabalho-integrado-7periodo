/**
 * ProdutosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    findAll: function(req, res){
        Produto.find({}).exec((err, produtos) => {
            if(err) res.status(500).send({error: 'Erro ao buscar produtos'});
            // lista = Produto.validar();
            res.status(200).send(produtos);
        });
    },

    create: async function(req, res){
        let nome = req.param('nome');
        let quantidade = req.param('quantidade');
        let custo = req.param('custo');
        let descricao = req.param('descricao');
        let categoriaId = 1;
        console.log("Create");

        var produtoCriado = await Produto.create({nome, quantidade, custo, categoria: categoriaId}).fetch();
        if(!produtoCriado){return res.status(500).send({error: 'Erro ao criar um novo produto'})}
        return res.json(produtoCriado);
    },

    findOne: async function(req, res){
        let id = req.param('id');
        if(id){
            try{
                var retorno = await Produto.findOne({id: id});
                return res.json(retorno);
            }catch(err){
                return res.status(500).send({error: err});
            }
        }else{
            return res.status(500).send({error: 'O id precisa ser informado'});
        }

    },

    update: async function(req, res) {
        let id = req.param('id');
        let updated = JSON.parse(req.param('produto'));
        if(id){
            var produtoAtualizado = await Produto.update({id: id}, updated).fetch();
            return res.json(produtoAtualizado);
        }else{
            return res.status(500).send({error: 'O id precisa ser informado'});
        }
    },

    delete: async function(req, res){
        let id = req.param('id');
        if(id){
            var deletado = await Produto.destroy({id: id}).fetch();
            return res.json({mensagem: 'Produto deletada com sucesso', deletado});
        }else{
            return res.status(500).send({error: 'O id precisa ser informado'});
        }
    }
};

