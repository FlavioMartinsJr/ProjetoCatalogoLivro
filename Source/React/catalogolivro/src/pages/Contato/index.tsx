import { Tittle } from "../../components/Tittle";
import { ScrollToTop } from "../../hooks/Functions/GoToTop"
import "./contato.scss";



export function Contato(){

    ScrollToTop();

    return(
        <section className="fundo-contato">

            {Tittle("Home / Contato ","Contato" ,"",false)}
            

        </section>
    )
}