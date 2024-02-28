import { Tittle } from "../../components/Tittle";
import { ScrollToTop } from "../../hooks/Functions/GoToTop"
import { Link } from "react-router-dom"
import "./sobre.scss";



export function Sobre(){

    ScrollToTop();

    return(
        <section className="fundo-sobre">

            {Tittle("Home / Sobre ","" ,"",false)}
            <div className="container sobre">
                <h3>Ver Sobre</h3>
                <p>O catalogo de Livros serve apenas para fins academicos de uso para promover a apredizagem em praticas de desenvolvimento de sistemas. Olhe tambem nossas <Link className="link" to={"/Privacidade"}>Politica de Privacidade</Link> e <Link className="link" to={"/TermosDeUso"}>Termos de Uso</Link></p>
                <p>(Texto e informações fictícias)</p>
            </div>
            
            

        </section>
    )
}