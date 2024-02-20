import { Cads } from "../../components/Cards/index";
import { Tittle } from "../../components/Tittle/index";
import "./home.scss";

export function Home(){

    return(
        <section className="fundo">
            
            {Tittle("Home","Catálogo de Livro" ,"12 Resultado",true)}

            <Cads/>

        </section>
    )
}