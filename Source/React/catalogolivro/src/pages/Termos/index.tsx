import { Tittle } from "../../components/Tittle";
import { ScrollToTop } from "../../hooks/Functions/GoToTop"
import "./termos.scss";



export function Termos(){

    ScrollToTop();

    return(
        <section className="fundo-termos">

            {Tittle("Home / Termos de Uso ","Termos de Uso" ,"",false)}
            

        </section>
    )
}