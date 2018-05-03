module.exports = {
    
    findAll: function(req, res){
        Categoria.find({}).exec((err, produtos) => {
            if(err) res.status(500).send({error: 'Erro ao buscar categorias.', outro: err});
            res.status(200).send(produtos);
        });
    },

    create: async function(req, res){
        let cat = JSON.parse(req.param('categoria'));
        
        var categoriaCriada = await Categoria.create(cat).fetch();
        if(!categoriaCriada){
            return res.status(500).send({error: 'Erro ao criar uma nova categoria.'})
        }
        return res.json(categoriaCriada);
    },

    findOne: async function(req, res){
        let id = req.param('id');
        if(id){
            try{
                var retorno = await Categoria.findOne({id: id});//.populate('produtos');
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
        let updated = JSON.parse(req.param('categoria'));
        if(id){
            var categoriaAtualizada = await Categoria.update({id: id}, updated).fetch();
            return res.json(categoriaAtualizada);
        }else{
            return res.status(500).send({error: 'O id precisa ser informado'});
        }
    },

    delete: async function(req, res){
        let id = req.param('id');
        if(id){
            var deletado = await Categoria.destroy({id: id}).fetch();
            return res.json({mensagem: 'Categoria deletada com sucesso', deletado});
        }else{
            return res.status(500).send({error: 'O id precisa ser informado'});
        }
    }

}