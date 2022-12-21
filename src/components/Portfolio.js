import React, { useState } from 'react';
import NavBar from './NavBar';
import About from './pages/AboutMePage';
import Portfolio from './pages/PortfolioPage';
import Contact from './pages/ContactPage';
import Resume from './pages/ResumePage';
import Footer from './Footer'

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