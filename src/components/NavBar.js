import React from 'react';
import '../styles/Header.css';

function NavTabs({ currentPage, handlePageChange }) {
 return (
    <header className="mb-4">
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand home headerText" onClick={() => handlePageChange('about')} href="#about">Rexx Madsen</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link about headerText" aria-current="page" onClick={() => handlePageChange('about')} href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link portfolio headerText" onClick={() => handlePageChange('portfolio')} href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link resume headerText" onClick={() => handlePageChange('resume')} href="#resume">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link contact headerText" onClick={() => handlePageChange('contact')} href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
 )
}


export default NavTabs