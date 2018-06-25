import { ExemplarProduto } from '../../admin/produto/exemplar-produto.model';
import { Produto } from '../../admin/produto/produto.model';

export class Carrinho {
    cliente: number; 
    exemplarprodutos: Array<ExemplarProduto>;

    constructor() {
        this.exemplarprodutos = new Array<ExemplarProduto>();
    }
}
