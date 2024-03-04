// import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
// import { faBookmark} from "@fortawesome/free-solid-svg-icons";
import { Stars} from "../Stars";
import { CadsRelated} from "../CardsRelated";
import { Separator} from "../Separator";
import './book.scss'
import { ConsultaBook } from "../../hooks/Functions/ConsultaBook";



export function Book() {
    let book = ConsultaBook()
    console.log(book)
   
    return(
        <section>
            {
                <div  key={book?.id} className="principal-book">
                    <div className="principal-book-left">
                        <img src={book?.urlImg} className="book-img" alt="..."/>
                    </div>
                
                    <div className="principal-book-right">
                        <div className="book-body">
                            <h5 className="book-title">{book?.title}</h5>
                            <p className="book-descrition">{book?.descrition}</p>
                            <p className='book-autho'>{book?.author}</p>
                            <div className='book-star'>
                                <Stars/>
                            </div>
                            <div className='book-book-mark'>
                                {/* <FontAwesomeIcon className="book-mark-icon" icon={faBookmark}/>
                                <a href="...">Adicionar a Lista de Favoritos</a> */}
                                <a href={book?.previewLink}>Visualize Aqui</a>
                            </div>
                        </div>
                    </div>
                </div>
            }

            <Separator/>

            <div className='card-related'>
                <h5>livros Relacionados</h5>
                <CadsRelated/>
            </div>

        </section>
        
    );
}