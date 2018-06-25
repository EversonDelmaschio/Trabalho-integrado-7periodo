export class ExemplarProduto {
    id: number; //REQUIRED
    quantidade: number; // REQUIRED
    cor: string;
    hexColor?: string; // Esse campo é só caso queira colocar a cor no formato hexadecimal pra renderizar pro cliente ver ..
    tamanhoId?: number; // REQUIRED
    produtoId?: number; // REQUIRED
    tamanho?: any;
    produto?: any;
}
