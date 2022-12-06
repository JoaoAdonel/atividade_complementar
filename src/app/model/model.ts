import { Guid } from "guid-typescript";

export interface Produto{
    id:Guid,
    nome:string,
    valor:string,
    quantidade:string
}