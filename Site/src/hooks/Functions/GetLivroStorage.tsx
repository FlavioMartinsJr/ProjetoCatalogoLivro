import { Livros } from "../../Types/Livro";

export function getLivroStorage(){
    let livro : Livros ={
        id: localStorage.getItem("LivroId"),
        title: localStorage.getItem("LivroTitle"),
        author: localStorage.getItem("LivroAuthor"),
        descrition:  localStorage.getItem("LivroDescrition"),
        urlImg: localStorage.getItem("LivroUrlImg"),
        previewLink:  localStorage.getItem("LivroPreviewLink"),
    };

    return livro;
}