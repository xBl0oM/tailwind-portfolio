import React, { useState } from 'react';
import "../index.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="home" className="bg-slate-800 h-20 flex justify-between items-center px-4 fixed top-0 w-full lg:h-screen lg:w-64 lg:flex-col lg:justify-start lg:fixed lg:top-0">
      <a href="home" className="z-50">
         <p className="text-4xl text-blue-50 lg:mt-10">Jan Frey</p>
      </a>
      <div onClick={toggleMenu} className="cursor-pointer lg:hidden z-50">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      </div>  
      <div className={`text-white flex flex-col fixed top-0 right-0 w-full h-full mt-20 bg-slate-800 transition-transform duration-700 ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:relative lg:translate-x-0 lg:w-64 lg:h-screen lg:flex lg:flex-col lg:items-center`}>
        <a href="#home" className="m-5 relative before:content-[''] before:absolute before:block before:w-12 before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300" onClick={toggleMenu}>Home</a>
        <a href="#aboutMe" className="m-5 relative before:content-[''] before:absolute before:block before:w-[5rem] before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300" onClick={toggleMenu}>About Me</a>
        <a href="#kenntnisse" className="m-5 relative before:content-[''] before:absolute before:block before:w-[5rem] before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300" onClick={toggleMenu}>Kenntnisse </a>
        <a href="#sport" className="m-5 relative before:content-[''] before:absolute before:block before:w-12 before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300" onClick={toggleMenu}>Sport</a>
        <a href="#projects" className="m-5 relative before:content-[''] before:absolute before:block before:w-16 before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300" onClick={toggleMenu}>Projects</a>
        <a href="#contact" className="m-5 relative before:content-[''] before:absolute before:block before:w-16 before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300" onClick={toggleMenu}>Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
