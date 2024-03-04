import { Tittle } from "../../components/Tittle";
import { ScrollToTop } from "../../hooks/Functions/GoToTop"
import "./contato.scss";



export function Contato(){

    ScrollToTop();

    return(
        <section className="fundo-contato">

            {Tittle("Inicio / Contato ","" ,"",false)}

            <div className="container contato">
                <h3>Contato</h3>
                <p>(Texto e informações fictícias)</p>
            </div>

        </section>
    )
}