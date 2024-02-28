import { Cads } from "../../components/Cards/index";
import { Tittle } from "../../components/Tittle/index";
import { Header } from "../../components/Header/index";
import { Separator } from "../../components/Separator/index";
import "./home.scss";

export function Home(){

    return(
        <section className="fundo">

            {Header()}

            {Separator()}
            
            {Tittle("Home ","Catálogo de Livro" ,"12 Resultado",true)}

            {Cads()}
            
        </section>
    );
}