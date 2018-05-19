
import { ProdutoDescricaoPipe } from './produto-descricao.pipe';
 
describe('Suíte de testes de para conferencia do campo descrição', () => {
 
	let produtoDescricao: ProdutoDescricaoPipe;
 
	beforeEach(() => {
		produtoDescricao = new ProdutoDescricaoPipe();
	});
 
 
	it('deve retornar o texto descricao indisponivel quando a descricao estiver vazia', () => {
		expect(produtoDescricao.transform('')).toEqual('Descrição indisponivel');
	});
 
	it('deve retornar o mesmo valor quando a descricao estiver preenchida', () => {
		expect(produtoDescricao.transform('super teste dos testes')).toEqual('super teste dos testes');
	});
});