import React, {useState} from 'react'
import '../css/Navbar.css';
import Hamburger from '../component/Hamburger';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
   <header>
    <div className='navbar'>
      <div className="logo">
        <h1>Alfin Nugraha</h1>
      </div>
      <Hamburger isOpen={isOpen} toggleNavbar={toggleNavbar} />
      <div className={`nav-list ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#" className='active'>Home</a></li>
          <li><a href="#">About me</a></li> 
          <li><a href="#">My Sertifit</a></li> 
          <li><a href="#">Personal Project</a></li> 
          <li><a href="#">Contact Me</a></li> 
        </ul>
      </div>
    </div>
   </header>
  )
}

export default Navbar