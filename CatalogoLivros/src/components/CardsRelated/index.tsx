import { useNavigate } from "react-router-dom"
import './cardsRelated.scss'
import { useApi } from "../../service/RepoServices";
import { useEffect, useState } from "react";
import { Livros } from "../../Types/Livro";
import { setLivroStorage } from "../../hooks/Functions/SetLivroStorage";


export function CadsRelated() {
    const [books, setBooks] = useState<any[] | null>(null);
    const navigate = useNavigate()
    const api = useApi();

    useEffect(() => {
        const consultarLivros = async () => {
            const title = localStorage.getItem("LivroTitle")
            const author=  localStorage.getItem("LivroAuthor")
            const livros = await api.GetLivrosByAuthor(author,title);
           
            if(livros){
                setBooks(livros)   
            }       
        }
        consultarLivros();
    }, []);

    async function Redirect(url: string,book: Livros | any){
        setLivroStorage(book)
        await navigate(url)
        window.location.href = window.location.href;
    }

    return(
        <section className="principal-cards-related row row-cols-2 row-cols-sm-3 row-cols-md-4 g-1">
            
            {books?
                books.map((items) => (
                <div key={items.id} className="fundo-card-related-book col h-100">
                    <div onClick={() => (Redirect("/Livro/"+items.title,items))} className="card-related-book card">
                        <img src={items.urlImg} className="card-related-book-img card-img-top" alt="..."/>
                        <div className="card-related-book-body card-body">
                            <h4 className="card-title">{items.title}</h4>
                            <h6 className="card-text">{items.author}</h6>
                        </div>
                        <div className="card-related-book-footer card-body d-flex justify-content-center">
                            <button >Ver Sobre</button>
                        </div>
                    </div>
                </div>
            )):<></>}
        </section>
        
    );
}