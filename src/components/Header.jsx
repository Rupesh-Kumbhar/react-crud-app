import React from 'react'
import { Link } from 'react-router-dom';
import './../style-scss/Header.scss'

const Header = () => {
    const isMobile = window.innerWidth <= 768; 

    return (
        <div >

            <nav class="navbar navbar-expand-lg navbar-light bg-light nav-top-fix">
                <div class="container-fluid bg-light">
                    {/* <a class="navbar-brand" href="#">Navbar</a> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav ">

                            <li class="nav-item d-flex">
                                <Link to="/profile" spy={true} smooth={true} offset={-100}
                                    duration={500} class="nav-link navbar-link-css " aria-current="page" href="#" style={{ fontWeight: 600, fontSize: '20px', margin: 'auto', padding: '0.5rem' }} 
                                    {...(isMobile ? {
                                        'data-bs-toggle': 'collapse',
                                        'data-bs-target': '#navbarSupportedContent'
                                    } : {})}
                                    >Rk</Link>
                            </li>
                            
                            <li class="nav-item d-flex">
                                <Link to="/create" spy={true} smooth={true} offset={-100}
                                    duration={500} class="nav-link navbar-link-css" aria-current="page" href="#" style={{ fontWeight: 600, fontSize: '20px', margin: 'auto', padding: '0.5rem' }} 
                                    {...(isMobile ? {
                                        'data-bs-toggle': 'collapse',
                                        'data-bs-target': '#navbarSupportedContent'
                                    } : {})}
                                    >Create Post</Link>
                            </li>

                            <li class="nav-item d-flex">
                                <Link to="/authors" spy={true} smooth={true} offset={-100}
                                    duration={500} class="nav-link navbar-link-css " aria-current="page" href="#" style={{ fontWeight: 600, fontSize: '20px' , margin: 'auto', padding: '0.5rem' }} 
                                    {...(isMobile ? {
                                        'data-bs-toggle': 'collapse',
                                        'data-bs-target': '#navbarSupportedContent'
                                    } : {})}
                                    >Authors</Link>
                            </li>


                            <li class="nav-item d-flex">
                                <Link to="/logout" spy={true} smooth={true} offset={-100}
                                    duration={500} class="nav-link navbar-link-css" aria-current="page" href="#" style={{ fontWeight: 600, fontSize: '20px', margin: 'auto', padding: '0.5rem' }} 
                                    {...(isMobile ? {
                                        'data-bs-toggle': 'collapse',
                                        'data-bs-target': '#navbarSupportedContent'
                                    } : {})}
                                    >Logout</Link>
                            </li>

                            {/* <li class="nav-item d-flex">
                                <Link to="internship" spy={true} smooth={true} offset={-100}
                                    duration={500} class="nav-link navbar-link-css" aria-current="page" href="#" style={{ fontWeight: 600, fontSize: '20px', margin: 'auto', padding: '0.5rem' }} {...(isMobile ? {
                                        'data-bs-toggle': 'collapse',
                                        'data-bs-target': '#navbarSupportedContent'
                                    } : {})}
                                    >Internship</Link>
                            </li>

                            <li class="nav-item d-flex">
                                <Link to="contact" spy={true} smooth={true} offset={-100}
                                    duration={500} class="nav-link navbar-link-css" aria-current="page" href="#" style={{ fontWeight: 600, fontSize: '20px', margin: 'auto', padding: '0.5rem' }} {...(isMobile ? {
                                        'data-bs-toggle': 'collapse',
                                        'data-bs-target': '#navbarSupportedContent'
                                    } : {})}
                                    >Contact</Link>
                            </li> */}

                        </ul>
                    </div>
                </div>
            </nav>

        </div>  
    )
}

export default Header