import React from 'react'
import ReactDOM from 'react-dom/client'
import './footer.scss'
import { useNavigate } from 'react-router-dom'



function Redirect(url: string){
    window.location.href = url
    
}

ReactDOM.createRoot(document.getElementById('Footer')!).render(
    <React.StrictMode>
        <div className="copyright container-fluid">
            <div className="copy-text">
                <a>&copy; Catalogo de Livro - Todos os Direitos Reservados.</a>
            </div>
            
            <div className="copy-menu">
                <a  onClick={() => (Redirect("/TermosDeUso"))} >Termos de Uso</a> |
                <a  onClick={() => (Redirect("/Privacidade"))}>Politica e Privacidade</a> |
                <a onClick={() => (Redirect("/Sobre"))}>Sobre</a> 
            </div>
        </div>
    </React.StrictMode>,
)
