import React from 'react'
import ReactDOM from 'react-dom/client'
import './footer.scss'


ReactDOM.createRoot(document.getElementById('Footer')!).render(
    <React.StrictMode>
        <div className="copyright container-fluid">
            <div className="copy-text">
                <a>&copy; Catalogo de Livro - Todos os Direitos Reservados.</a>
            </div>
            
            <div className="copy-menu">
                <a href="TermosDeUso">Termos de Uso</a> |
                <a href="Privacidade">Privacidade</a> |
                <a href="Sobre">Sobre</a> 
            </div>
        </div>
    </React.StrictMode>,
)
