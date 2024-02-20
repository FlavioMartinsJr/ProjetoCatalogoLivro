import { faGrip} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Cads } from "../../components/Cards/index";
import "./home.scss";

export function Home(){

    return(
        <section className="fundo">
            <div className="fundo-titulo">
                <div className="fundo-titulo-left">
                    <h5>Home</h5>
                    <h2>Catálogo de Livros</h2>
                </div>
                <div className="fundo-titulo-right">
                    <p><FontAwesomeIcon icon={faGrip}/>  12 resultados</p>
                </div>
            </div>
            
            

            <Cads/>
        </section>
    )
}