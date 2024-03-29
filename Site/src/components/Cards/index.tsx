import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useApi } from "../../service/RepoServices";
import './cards.scss'
import { Tittle } from "../Tittle";
import { Livros } from "../../Types/Livro";
import { setLivroStorage } from "../../hooks/Functions/SetLivroStorage";
import ReactPaginate from "react-paginate";

export function Cads() {
    const [pageCount, setPageCount] = useState(0);
    const [currentItems, setCurrentItems] = useState<any[] | null>([]);
    const [itemOffset, setItemsOffSet] = useState(0);
    const [books, setBooks] = useState<any[] | null>(null);
    
    const navigate = useNavigate()
    const api = useApi();
    const itemsPage = 12;

    useEffect(() => {
        const consultarLivros = async () => {
            let livros  = []
            if(localStorage.getItem("pesquisa") != undefined && localStorage.getItem("pesquisa") != null && localStorage.getItem("pesquisa") != ""){
                livros = await api.GetLivrosByPesquisa(localStorage.getItem("pesquisa"));
                localStorage.setItem("pesquisa","")
            }else{
                livros = await api.GetLivros();
            }
            if(livros){
                setBooks(livros)   
            }       
        }
        consultarLivros();
    }, []);

    useEffect(() => {
        
        if(books !== undefined && books !== null){
            const endOffset = itemOffset + itemsPage;
            setCurrentItems(books.slice(itemOffset, endOffset))
            setPageCount(Math.ceil(books.length / itemsPage))
        }
    },[itemOffset,itemsPage,books])

    async function Redirect(url: string,book: Livros | any){
        setLivroStorage(book)
        await navigate(url)
        window.location.href = window.location.href;
    }

    const handlePageClick = (event: any) => {
        if(books !== undefined && books !== null){
            const newOffset = (event.selected * itemsPage) % books?.length
            setItemsOffSet(newOffset)
        }
    }

    return(
        <div className="principal">

            {Tittle("Inicio ","Catálogo de Livro" ,`${books? books?.length:"0"} Resultado`,true)}

            <section className="principal-cards row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5 gy-1 gy-md-4 gx-md-2">
                
                {books?
                    currentItems?.map((items) => (
                    <div key={items.id} className="fundo-card-book col h-100">
                        <div onClick={() => (Redirect("/Livro/"+items.title, items))} className="card-book card">
                            <img src={items.urlImg} className="card-book-img card-img-top" alt="..."/>
                            <div className="card-book-body card-body">
                                <h4 className="card-title">{items.title}</h4>
                                <h6 className="card-text">{items.author}</h6>
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
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={<FontAwesomeIcon icon={faChevronRight}/>}
                    previousLabel={<FontAwesomeIcon  icon={faChevronLeft}/>}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={15}
                    pageCount={pageCount}
                    renderOnZeroPageCount={null}
                    containerClassName="pagination"
                    pageLinkClassName="principal-paginacao-button"
                    previousLinkClassName="principal-paginacao-back-next"
                    nextLinkClassName="principal-paginacao-back-next"
                    activeClassName="activated"
                />
            </nav> 

            {/* <nav className="principal-paginacao d-flex justify-content-center">
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
            </nav> */}
        </div>
        
    );
}