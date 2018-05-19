 
import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
	name: 'produtoDescricao'
})
export class ProdutoDescricaoPipe implements PipeTransform {
 
    transform(descricao: any): string {
        let descricaoTexto: string = String(descricao);
 
        if (descricaoTexto != "") {
            return descricao;
        }
		else{
			return "Descrição indisponivel";
		}
    }
}