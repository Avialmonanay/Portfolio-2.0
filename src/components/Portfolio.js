//renders Navbar, CurrentPage, and Footer

//import React
import React, { useState } from 'react';

//import navBar and Footer
import NavBar from './NavBar';
import Footer from './Footer'

//import pages
import About from './pages/AboutMePage';
import Portfolio from './pages/PortfolioPage';
import Contact from './pages/ContactPage';
import Resume from './pages/ResumePage';

//returns Navbar, CurrentPage, and Footer HTML
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer/>
    </div>
  );
}