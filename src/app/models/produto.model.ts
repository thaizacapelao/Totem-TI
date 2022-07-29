import { SituacaoEnum } from './enum/situacao.enum';
import { Categoria } from './categoria.model';

export type Produto = {
    id: number;
    nome: string;
    categoria : Categoria;
    situacao : SituacaoEnum;
}