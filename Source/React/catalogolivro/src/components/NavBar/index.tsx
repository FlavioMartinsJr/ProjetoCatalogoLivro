import React from 'react'
import ReactDOM from 'react-dom/client'
import './navBar.scss'

import { faWhatsapp,faGithub,faLinkedin,} from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope,faUser,faBookmark, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


ReactDOM.createRoot(document.getElementById('NavBar')!).render(
    <React.StrictMode>
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
                    <img className="icon-catalogo-full" aria-current="page" src="../../../public/img/logo-Livro.png"/>
                    <img className="icon-catalogo-small" aria-current="page" src="../../../public/img/logo-Livro-pequena.png"/>
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
                                    <a className="nav-link" aria-current="page" href="Inicio">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="Contato">Contato</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="Sobre">Sobre</a>
                                </li>                    
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className='header-content-nav-right d-flex align-items-center navbar-brand'>
                    <form className="d-flex" action="">
                        <input className="nav-search" type="search" placeholder="Pesquisar um Livro..." aria-label="search"/>
                        <FontAwesomeIcon className="nav-form-icon" icon={faMagnifyingGlass}/>
                    </form>

                    <div className="nav-button d-flex">
                        {/* <div className='nav-button-book-marker'>
                            <button className='button-default button-default-stroke button-default-small'> <FontAwesomeIcon icon={faBookmark}/></button>
                        </div> */}
                        <div className='nav-button-user'>
                            <button className='button-default button-default-small'>Entrar <FontAwesomeIcon icon={faUser}/></button>
                        </div>
                        
                    </div>
                </div>
            </nav>
        </section>
    </React.StrictMode>,
)
