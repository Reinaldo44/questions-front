import { answers } from "./answers";

export interface question{

    id: string;
    descricao: string;
    categoria: string;
    answers: Array<answers>;
    
}