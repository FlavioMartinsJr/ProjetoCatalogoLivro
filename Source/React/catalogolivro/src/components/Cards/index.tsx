import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './cards.scss'


function List(loop: number) {
    let rows = [];
    for (let i = 0; i < loop; i++) {
      rows.push(i);
    }
    return rows;
}


export function Cads() {
    let [activeBack, setActiveBack ] = useState(Boolean)
    let [activeButton, setActiveButton ] = useState(true)
    let [activeNext, setActiveNext ] = useState(true)

    const navigate = useNavigate()
    const repeat = List(15)

    function Redirect(url: string){
        return navigate(url)
    }

    return(
        <div className="principal">
            <section className="principal-cards row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5 gy-1 gy-md-4 gx-md-2">
                
                {repeat.map((index) => (
                    <div key={index} className="fundo-card-book col h-100">
                        <div onClick={() => (Redirect("/Livro"))} className="card-book card">
                            <img src="http://books.google.com/books/content?id=eTldtwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" className="card-book-img card-img-top" alt="..."/>
                            <div className="card-book-body card-body">
                                <h4 className="card-title">O Homem Mais Rico da Babilonia (Em Portuguese do Brasil)</h4>
                                <h6 className="card-text">George S. Clason</h6>
                            </div>
                            <div className="card-book-footer card-body d-flex justify-content-center">
                                <button >Ver Sobre</button>
                            </div>
                        </div>
                    </div>
                ))}
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