import './cards.scss'


export function Cads() {

    return(
        <div className="principal">
            <section className="principal-cards">

            </section>
            <nav aria-label="principal-paginacao Page navigation">
                <ul className="pagination justify-content-end">
                    <li className="page-item">
                        <a className="page-link">&laquo; </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#"> &raquo;</a>
                    </li>
                </ul>
            </nav>
        </div>
        
    );
}


