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
            <nav className="navbar navbar-expand-md" >
                <div className="container-fluid row-md">

                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="offcanvas offcanvas-start col-sm-4 col-auto"  id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> 
                        </div>
                        
                        <div className="nav-text offcanvas-body d-flex justify-content-lg-center justify-content-start">
                            <ul className="navbar-nav">
                                <li className="nav-item mx-md-2">
                                    <a className="nav-link" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item mx-md-2">
                                    <a className="nav-link" aria-current="page" href="Contato">Contato</a>
                                </li>
                                <li className="nav-item mx-md-2">
                                    <a className="nav-link" aria-current="page" href="Sobre">Sobre</a>
                                </li>                    
                            </ul>
                        </div>
                    </div>

                    
                    <form className="d-flex col-lg-5 col-md-6 col-sm-7 col-8 d-flex justify-content-lg-end justify-content-center navbar-brand" role="pesquisar">
                        <input className="pesquisar" type="search" placeholder="Pesquisar um Livro..." aria-label="pesquisar"/>
                        <FontAwesomeIcon className="form-icon" icon={faMagnifyingGlass}/>
                    </form>

                    <div className="navbar-brand col-xl-3 col-lg-2 col-1 d-flex justify-content-end">
                        <a aria-current="page" href="Favoritos" className='book-marker mx-4'><FontAwesomeIcon icon={faBookmark}/></a>
                        <a aria-current="page" href="Usuario" className='user mx-2'><FontAwesomeIcon icon={faUser}/></a>
                    </div>

                </div>
            </nav>
        </section>
    </React.StrictMode>,
)
