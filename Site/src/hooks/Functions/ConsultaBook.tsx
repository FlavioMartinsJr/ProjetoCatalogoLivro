import { useNavigate, useParams } from "react-router-dom";
import { Livros } from "../../Types/Livro";
import { getLivroStorage } from "./GetLivroStorage";

export function ConsultaBook(){
    const navigate = useNavigate()
    const{ title } = useParams()
    if( title !==   localStorage.getItem("LivroTitle"))
        return navigate("/")

    const Livro : Livros = getLivroStorage()

    return Livro;
}