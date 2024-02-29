import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useApi } from "../../service/RepoServices";
import './cards.scss'
import { Tittle } from "../Tittle";

export function Cads() {
    let [activeBack, setActiveBack ] = useState(Boolean)
    let [activeButton, setActiveButton ] = useState(true)
    let [activeNext, setActiveNext ] = useState(true)
    const [Livros, setLivros] = useState<any[] | null>(null);

    const navigate = useNavigate()
    const api = useApi();

    useEffect(() => {
        const consultarLivros = async () => {
            const livros = await api.GetLivros();
           
            if(livros){
                setLivros(livros.items)   
            }       
        }
        consultarLivros();
    }, []);

    function Redirect(url: string){
        return navigate(url)
    }

    return(
        <div className="principal">

            {Tittle("Inicio ","Catálogo de Livro" ,`${Livros? Livros?.length:"0"} Resultado`,true)}

            <section className="principal-cards row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5 gy-1 gy-md-4 gx-md-2">
                
                {Livros?
                    Livros.map((items) => (
                    <div key={items.id} className="fundo-card-book col h-100">
                        <div onClick={() => (Redirect("/Livro/id="+items.id))} className="card-book card">
                            <img src={items.volumeInfo.imageLinks.thumbnail} className="card-book-img card-img-top" alt="..."/>
                            <div className="card-book-body card-body">
                                <h4 className="card-title">{items.volumeInfo.title}</h4>
                                <h6 className="card-text">{items.volumeInfo.authors}</h6>
                            </div>
                            <div className="card-book-footer card-body d-flex justify-content-center">
                                <button >Ver Sobre</button>
                            </div>
                        </div>
                    </div>
                    )):
                    <></>
                }
            </section>

            <nav className="principal-paginacao d-flex justify-content-center">
                <div className={activeBack? "principal-paginacao-back-activated me-2": "principal-paginacao-back-deactivated me-2 "}>
                    <FontAwesomeIcon className="paginacao-back" icon={faChevronLeft}/>
                </div>

                <div className="principal-paginacao-button" >
                    <span className={activeButton?"ms-1 me-1 activated":"ms-1 me-1 "}>1</span>
                    <span className="ms-1 me-1" >2</span>
                    <span className="ms-1 me-1">3</span>
                </div>

                <div className={activeNext? "principal-paginacao-next-activated ms-2": "principal-paginacao-next-deactivated ms-2 "}>
                    <FontAwesomeIcon  icon={faChevronRight}/>
                </div>
            </nav>
        </div>
        
    );
}