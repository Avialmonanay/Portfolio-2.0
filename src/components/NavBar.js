//renders the NavBar

//import React
import React from 'react';

//import styling
import '../styles/Navbar.css'


//returns the navBar if the page the user is on (currentPage) will be highlighted green on the navbar else it will follow normal styling
function NavBar({ currentPage, handlePageChange }) {
 return (
  <header className="customHeader">
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand customText nameHeader" href="#about" onClick={() => handlePageChange('About')}>Rexx Madsen</a>
      <button className="navbar-toggler collapser" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a 
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link activeNav' : 'nav-link customText'}>
            About
            </a>
          </li>
          <li className="nav-item">
            <a  
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link activeNav' : 'nav-link customText'}>
              Portfolio
              </a>
          </li>
          <li className="nav-item">
            <a href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link activeNav' : 'nav-link customText'}>
              Resume
              </a>
          </li>
          <li className="nav-item">
            <a href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link activeNav' : 'nav-link customText'}>
              Contact
              </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
)
}



export default NavBar