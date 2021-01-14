import React from 'react';
import {useState, useEffect} from 'react';
import YouTube from 'react-youtube';
import PlayerInfo from './Components/PlayerSection/PlayerInfo';
import Youtube from './Components/YoutubeSection/Youtube';
import Home from './Components/HomeSection/Home';
import About from './Components/AboutSection/About';
import Contact from './Components/ContactSection/Contact';

import {Link} from 'react-scroll';


function App() {

  //Change Icon color on scroll
  function iconColor (color){
    var icons = document.querySelectorAll('.icon-list li');
    icons.forEach(icon => icon.style.color = color);
  }

  function backgroundShade (shade){
    document.querySelector(".App").style.backgroundColor = shade;
  }

  //Change Background color on scroll
  function scroll (){
    if (window.scrollY > 100){
      backgroundShade('rgba(0, 0, 0, 0.7)');
      iconColor('white');
    }
    else {
      backgroundShade('rgba(0, 0, 0, 0)');
      iconColor('black');
    }
  }

    window.addEventListener('scroll', scroll)


  return (
    <div className="App">
      
      <Home />
      <PlayerInfo />
      <Youtube />
      <Contact />
      
    </div>
  );
}

export default App;
