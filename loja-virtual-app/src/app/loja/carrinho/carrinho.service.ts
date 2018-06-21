import { Injectable } from '@angular/core';
import { Produto } from '../../admin/produto/produto.model';
import { Carrinho } from './carrinho.model';
import { ExemplarProduto } from '../../admin/produto/exemplar-produto.model';

@Injectable()
export class CarrinhoService {
    // tslint:disable:prefer-const
    adicionarProduto(exemplar: ExemplarProduto): boolean  {
        // Adicionar os produtos ou os ID's ?
        // Verificar se já existe um carrinho com produtos
        if (localStorage.getItem('carrinho_online')) {
            let dados: Array<ExemplarProduto> = JSON.parse(localStorage.getItem('carrinho_online'));
            dados.push(exemplar);
            localStorage.setItem('carrinho_online', JSON.stringify(dados));
            /*
            console.log(exemplarId, dados.indexOf(exemplarId));
            if(dados.indexOf(exemplarId) == -1){
                dados.push(exemplarId);
                localStorage.setItem('carrinho_online', JSON.stringify(dados));
                return true;
            }
            return false;
            */
            return true;
        } else {
            localStorage.setItem('carrinho_online', JSON.stringify([exemplar]));
            return true;
        }
    }

    removerProduto(exemplar: ExemplarProduto) {
        // Verificar se já existe um carrinho com produtos
        if (localStorage.getItem('carrinho_online')) {
            let dados: Array<ExemplarProduto> = JSON.parse(localStorage.getItem('carrinho_online'));
            dados.splice(dados.indexOf(exemplar), 1);
            localStorage.setItem('carrinho_online', JSON.stringify(dados));
        }
    }

    removerProdutos() {
        // Apaga o conteúdo do carrinho
        localStorage.removeItem('carrinho_online');
    }


}
