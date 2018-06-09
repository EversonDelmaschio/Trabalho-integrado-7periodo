import { ExemplarProduto } from './exemplar-produto.model';

export class Produto {
    nome: string; // required
    descricao: string;
    quantidade: number; // required
    destaque: boolean;
    custo: number; // required
    venda: number; // required
    categoria: any;
    imagens: Array<Imagem>;
    exemplarprodutos: Array<ExemplarProduto>;
    marca: string;
    modelo: string;
    material: string;

    constructor() {
        this.imagens = new Array<Imagem>();
        this.exemplarprodutos = new Array<ExemplarProduto>();
    }
}

export class Imagem {
    id: number; // REQUIRED
    link: string; // REQUIRED
    nome?: string;
    linkThumb?: string;
    descricao?: string;
}
