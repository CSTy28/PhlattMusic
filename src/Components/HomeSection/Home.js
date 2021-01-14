import React from 'react'
import Navbar from '../../Components/NavSection/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {FaInstagram, FaFacebookSquare, FaYoutube} from 'react-icons/fa';


function Home() {

    

    window.onload = function initialAnimations (){
          document.querySelector(".bigname").style.opacity = "1";

          var list = document.querySelectorAll(".navitem");
          list.forEach(item => item.classList.add('active'));

          var icons = document.querySelectorAll('.iconitem');
          icons.forEach(icon => icon.classList.add('active'));

      }
    
        

    return (
        <section className='homeSection' >
           <Navbar />
           
           
            <h1 className='bigname'>PHLATT</h1>
            <ul className='icon-list'>
                <li className='iconitem icon1'><a href='#'><FaInstagram /></a></li>
                <li className='iconitem icon2'><a href='#'><FaYoutube /></a></li>
                <li className='iconitem icon3'><a href='#'><FaFacebookSquare /></a></li>
            </ul>

        </section>
    )
}

export default Home
