import React, { useState } from 'react';
import NavBar from './NavBar';
import About from './pages/AboutMePage';
import Portfolio from './pages/PortfolioPage';
import Contact from './pages/ContactPage';
import Resume from './pages/ResumePage';
import Footer from './Footer'

export default function PortfolioContainer() {
  // const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  // const renderPage = () => {
  //   if (currentPage === 'About') {
  //     return <About />;
  //   }
  //   if (currentPage === 'Portfolio') {
  //     return <Portfolio />;
  //   }
  //   if (currentPage === 'Contact') {
  //     return <Contact />;
  //   }
  //   return <Resume />;
  // };

  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavBar />
      <About />
      <Footer/>
    </div>
  );
}