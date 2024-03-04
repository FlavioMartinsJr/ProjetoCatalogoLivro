import { Livros } from "../../Types/Livro"

export function setLivroStorage(book: Livros | any){
    localStorage.setItem("LivroId",book.id)
    localStorage.setItem("LivroTitle",book.title)
    localStorage.setItem("LivroAuthor",book.author)
    localStorage.setItem("LivroDescrition",book.descrition)
    localStorage.setItem("LivroUrlImg",book.urlImg)
    localStorage.setItem("LivroPreviewLink",book.previewLink)
}