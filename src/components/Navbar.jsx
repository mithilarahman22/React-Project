
import React, {useState}from 'react';
import "../Style/Navbar.css";
import { Link } from 'react-router-dom';
import Logo from '../assets/pizzaLogo.png';

const Navbar =() => {
  const [openLinks, setOpenLinks] = useState(false);

const toggleNavbar = () => {
  setOpenLinks(!openLinks);
};
  return (
    <nav className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
       <img src={Logo}/>
       <div className='hiddenLinks'>
         <Link to="/Home"> Home </Link>
         <Link to="/Menu"> Menu </Link>
         <Link to="/About"> About </Link>
         <Link to="/Contact"> Contact </Link>
       </div>
      </div> 
      <div className='rightSide'>
        <Link to="/Home"> Home </Link>
        <Link to="/Menu"> Menu </Link>
        <Link to="/About"> About </Link>
        <Link to="/Contact"> Contact </Link>
        <button onClick={toggleNavbar}>
          Menu
        </button>

       
      </div>
    </nav>
  );
};


export default Navbar;

