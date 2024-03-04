import slide1 from "../../assets/img/slide1.jpg";
import slide2 from "../../assets/img/slide2.jpg";
import "./header.scss";

export function Header(){

    return(
        <header className="header-fundo">
            <div id="carouselCaptions" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>

                </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="7000">
                    <img src={slide1} className="d-block w-100" alt="slide1"/>
                    <div className="carousel-caption conteudo">
                        <h5>Livros para Todos os Espíritos Aventureiros!</h5>
                        <p>Dê asas à sua imaginação com nossa coleção de livros online!</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="7000">
                    <img src={slide2} className="d-block w-100" alt="slide2"/>
                    <div className="carousel-caption conteudo">
                        <h5>Livros Online. Explore e Descubra </h5>
                        <p>Encontre sua próxima grande aventura literária online!</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </header>
    );
}