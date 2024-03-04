// import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
// import { faBookmark} from "@fortawesome/free-solid-svg-icons";
import { Stars} from "../Stars";
import { CadsRelated} from "../CardsRelated";
import { Separator} from "../Separator";
import './book.scss'
import { getLivroStorage } from '../../hooks/Functions/GetLivroStorage';

export function Book() {
    const Livro = getLivroStorage()
    
    return(
        <section>
            {
                <div  key={Livro.id} className="principal-book">
                    <div className="principal-book-left">
                        <img src={Livro.urlImg} className="book-img" alt="..."/>
                    </div>
                
                    <div className="principal-book-right">
                        <div className="book-body">
                            <h5 className="book-title">{Livro.title}</h5>
                            <p className="book-descrition">{Livro.descrition}</p>
                            <p className='book-autho'>{Livro.author}</p>
                            <div className='book-star'>
                                <Stars/>
                            </div>
                            <div className='book-book-mark'>
                                {/* <FontAwesomeIcon className="book-mark-icon" icon={faBookmark}/>
                                <a href="...">Adicionar a Lista de Favoritos</a> */}
                                <a href={Livro.previewLink}>Visualize Aqui</a>
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