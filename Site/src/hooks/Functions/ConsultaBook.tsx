import { Livros } from "../../Types/Livro";
import { getLivroStorage } from "./GetLivroStorage";

export function ConsultaBook(){
    const Livro : Livros[] = []
    Livro.push(getLivroStorage()) 

    let book = Livro[Livro.length - 1]

    return book;
}