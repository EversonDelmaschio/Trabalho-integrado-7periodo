module.exports = {
    
    findAll: function(req, res){
        Categoria.find({}).exec((err, produtos) => {
            console.log("Find Categoria ->");
            if(err) res.status(500).send({error: 'Erro ao buscar categorias'});
            res.status(200).send(produtos);
        });
    },

}