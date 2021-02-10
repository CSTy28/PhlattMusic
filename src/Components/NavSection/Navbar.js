import React from 'react';
import {Link} from 'react-scroll';

function Navbar() {

    //var docWidth = document.documentElement.offsetWidth;


   var tog = () => {
       var list = document.querySelector(".nav-list");
       list.classList.toggle('act')
   }
    
    return (
        <nav className='bobo'>
            <a onClick={tog} href="#" className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <ul className='nav-list'>
                <li className='navitem nav1'><Link to='home' smooth={true} duration={1000}>Home</Link></li>
                <li className='navitem nav2'><Link to='music' smooth={true} duration={1000}>Music</Link></li>
                <li className='navitem nav3'><Link to='youtube' smooth={true} duration={1000}>Youtube</Link></li>
                <li className='navitem nav4'><Link to='about-me' smooth={true} duration={1000}>About Me</Link></li>
                <li className='navitem nav5'><Link to='contact-me' smooth={true} duration={1000}>Contact Me</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
