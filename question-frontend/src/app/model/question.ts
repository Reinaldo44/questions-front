import { answers } from "./answers";

export interface question{

    id?: any;
    descricao: string;
    categoria: string;
    answers: Array<answers>;
    
}