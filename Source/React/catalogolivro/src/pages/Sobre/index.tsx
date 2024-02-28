import { Tittle } from "../../components/Tittle";
import { ScrollToTop } from "../../hooks/Functions/GoToTop"
import "./sobre.scss";



export function Sobre(){

    ScrollToTop();

    return(
        <section className="fundo-sobre">

            {Tittle("Home / Sobre ","Ver Sobre" ,"",false)}
            
         

        </section>
    )
}