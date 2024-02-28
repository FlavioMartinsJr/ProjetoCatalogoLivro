import { useNavigate } from "react-router-dom"
import './cardsRelated.scss'


function List(loop: number) {
    let rows = [];
    for (let i = 0; i < loop; i++) {
      rows.push(i);
    }
    return rows;
}


export function CadsRelated() {
    const navigate = useNavigate()
    const repeat = List(4)

    function Redirect(url: string){
        return navigate(url)
    }

    return(
        <section className="principal-cards-related row row-cols-2 row-cols-sm-3 row-cols-md-4 g-1">
            
            {repeat.map((index) => (
                <div key={index} className="fundo-card-related-book col h-100">
                    <div onClick={() => (Redirect("/Livro"))} className="card-related-book card">
                        <img src="http://books.google.com/books/content?id=eTldtwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" className="card-related-book-img card-img-top" alt="..."/>
                        <div className="card-related-book-body card-body">
                            <h4 className="card-title">O Homem Mais Rico da Babilonia (Em Portuguese do Brasil)</h4>
                            <h6 className="card-text">George S. Clason</h6>
                        </div>
                        <div className="card-related-book-footer card-body d-flex justify-content-center">
                            <button >Ver Sobre</button>
                        </div>
                    </div>
                </div>
            ))}
        </section>
        
    );
}