import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faBookmark} from "@fortawesome/free-solid-svg-icons";
import { Stars} from "../Stars";
import './book.scss'


export function Book() {

    return(
        <section className="principal-book">
                
            <div className="principal-book-left">
                <img src="http://books.google.com/books/content?id=eTldtwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" className="book-img" alt="..."/>
            </div>

            <div className="principal-book-right">
                <div className="book-body">
                    <h5 className="book-title">O Homem Mais Rico da Babilonia (Em Portuguese do Brasil)</h5>
                    <p className="book-descrition">This is a s afsa fsafsa fasf s afas fsaf saf saf saf saf saf saf saf  asf saf sa fsf af f saf aa widwqew w ewqe we wqe wqe qw eqr3 rq3r3 qr3qer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className='book-autho'>George S. Clason</p>
                    <div className='book-star'>
                        <Stars/>
                    </div>
                    <div className='book-book-mark'>
                        <FontAwesomeIcon className="book-mark-icon" icon={faBookmark}/>
                        <a href="...">Adicionar a Lista de Favoritos</a>
                    </div>
                </div>
            </div>

        </section>
    );
}