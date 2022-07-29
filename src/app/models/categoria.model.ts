import { SituacaoEnum } from "./enum/situacao.enum";

export type Categoria = {
    id: number;
    nome: string;
    situacao: SituacaoEnum;
}
