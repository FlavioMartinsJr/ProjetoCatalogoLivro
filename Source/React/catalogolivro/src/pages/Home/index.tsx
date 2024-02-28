import { Cads } from "../../components/Cards/index";
import { Tittle } from "../../components/Tittle/index";
import { Header } from "../../components/Header/index";
import { Separator } from "../../components/Separator/index";
import {  Books } from "../../hooks/Books/BooksServices";
import "./home.scss";

const books = Books()

export function Home(){
    books.listarLivros()
    return(
        <section className="fundo">

            {Header()}

            {Separator()}
            
            {Tittle("Inicio ","Catálogo de Livro" ,"12 Resultado",true)}

            {Cads()}
            
        </section>
    );
}