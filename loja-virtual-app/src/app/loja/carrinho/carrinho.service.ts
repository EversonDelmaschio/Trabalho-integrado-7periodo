import { Injectable } from '@angular/core';
import { Produto } from '../../admin/produto/produto.model';
import { Carrinho } from './carrinho.model';

@Injectable()
export class CarrinhoService {
    // tslint:disable:prefer-const
    adicionarProduto(carrinho: Carrinho) {
        // Adicionar os produtos ou os ID's ?
        // Verificar se já existe um carrinho com produtos
        if (localStorage.getItem('carrinho_online')) {
            let dados: Array<Carrinho> = JSON.parse(localStorage.getItem('carrinho_online'));
            dados.push(carrinho);
            localStorage.setItem('carrinho_online', JSON.stringify(dados));
        } else {
            localStorage.setItem('carrinho_online', JSON.stringify([carrinho]));
        }
    }

    removerProduto(produtoId: number) {
        // Verificar se já existe um carrinho com produtos
        if (localStorage.getItem('carrinho_online')) {
            let dados: Array<number> = JSON.parse(localStorage.getItem('carrinho_online'));
            dados.splice(dados.indexOf(produtoId), 1);
            localStorage.setItem('carrinho_online', JSON.stringify(dados));
        }
    }

    removerProdutos() {
        // Apaga o conteúdo do carrinho
        localStorage.removeItem('carrinho_online');
    }


}
