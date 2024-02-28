import { Tittle } from "../../components/Tittle";
import { Book } from "../../components/Book";
import { ScrollToTop } from "../../hooks/Functions/GoToTop"
import "./livro.scss";



export function Livro(){

    ScrollToTop();

    return(
        <section className="fundo-livro">

            {Tittle("Home / Livro / Homem Mais Rico","Ver Livro" ,"",false)}
            
            {Book()}

        </section>
    )
}