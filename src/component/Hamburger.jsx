import React from 'react'

const Hamburger = ({ isOpen, toggleNavbar }) => {
  return (
    <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

export default Hamburger;