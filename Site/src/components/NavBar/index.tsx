import  { useState } from 'react'
import { faWhatsapp,faGithub,faLinkedin,} from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope,faUser, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoLivro from "../../assets/img/logo-Livro.png";
import LogoLivroPequeno from "../../assets/img/logo-Livro-pequena.png";
import './navBar.scss'

export function NavBar() {
    
    const [valor, setValor] = useState("")
   
    const handleChange = (event: string | any) =>{
        localStorage.setItem("pesquisa",valor)
        setValor(event.target.value);
    }
    function onSubmit(){
        localStorage.setItem("pesquisa",valor)
        window.location.href = "/"
    }

    function Redirect(url: string){
        window.location.href = url
    }

    return(
    <div>
        <section className='header'>
            <div className='header-icon'>
                <FontAwesomeIcon icon={faWhatsapp}/>
                <FontAwesomeIcon icon={faGithub}/>
                <FontAwesomeIcon icon={faSquareEnvelope}/>
                <FontAwesomeIcon icon={faLinkedin}/>
            </div>
        </section>

        <section className='header-content'>
            <nav className="header-content-nav navbar container-fluid navbar-expand-md" >

                <div className='header-content-nav-left d-flex'>
                    <img className="icon-catalogo-full" aria-current="page" onClick={() => (Redirect("/"))} src={LogoLivro}/>
                    <img className="icon-catalogo-small" aria-current="page" onClick={() => (Redirect("/"))} src={LogoLivroPequeno}/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-start"  id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> 
                        </div> 
                        
                        <div className="nav-text offcanvas-body">
                            <ul className="navbar-nav">
                                
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" onClick={() => (Redirect("/"))} >INICIO</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="Contato">Contato</a>
                                </li> */}
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" onClick={() => (Redirect("/Sobre"))}>SOBRE</a>
                                </li>                    
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className='header-content-nav-right d-flex align-items-center navbar-brand'>
                    <form className="d-flex" onSubmit={onSubmit} action='/'>
                        <input className="nav-search" onChange={handleChange} type="search" placeholder="Pesquisar um Livro..." name="pesquisa" aria-label="search" />
                        <FontAwesomeIcon className="nav-form-icon" onClick={onSubmit} icon={faMagnifyingGlass}/>
                    </form>

                    <div className="nav-button d-flex">
                        {/* <div className='nav-button-book-marker'>
                            <button className='button-default button-default-stroke button-default-small'> <FontAwesomeIcon icon={faBookmark}/></button>
                        </div> */}
                        
                        <div className='nav-button-user'>
                           
                            <button className='button-default button-default-small'>ENTRAR <FontAwesomeIcon icon={faUser}/></button>
                        </div>
                        
                    </div>
                </div>
            </nav>
        </section>
    </div>
    );
}
