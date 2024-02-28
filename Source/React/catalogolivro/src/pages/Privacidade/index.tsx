import { Tittle } from "../../components/Tittle";
import { ScrollToTop } from "../../hooks/Functions/GoToTop"
import "./privacidade.scss";



export function Privacidade(){

    ScrollToTop();

    return(
        <section className="fundo-privacidade">

            {Tittle("Home / Privacidade ","Politica e Privacidade" ,"",false)}
            

        </section>
    )
}