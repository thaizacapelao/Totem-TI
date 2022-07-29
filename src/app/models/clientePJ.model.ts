import { Cliente } from './cliente.model';
export type ClientePJ = Cliente & {
    cnpj: string;
    inscricaoEstadual: number;
}