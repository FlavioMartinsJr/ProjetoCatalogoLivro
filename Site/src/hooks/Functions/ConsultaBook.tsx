import { useParams } from "react-router-dom";
import { Livros } from "../../Types/Livro";
import { getLivroStorage } from "./GetLivroStorage";

export function ConsultaBook(){
    const{ title } = useParams()
    if( title !==   localStorage.getItem("LivroTitle"))
        return window.location.href = "/"

    const Livro : Livros = getLivroStorage()

    return Livro;
}