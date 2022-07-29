import { SexoEnum } from './enum/sexo.enum';
import { Cliente } from "./cliente.model";

export type ClientePF = Cliente & {
    cpf: string;
    sexo: SexoEnum;
}