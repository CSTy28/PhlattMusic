import React from 'react'
import {useState, useEffect} from 'react';
import Player from './Player';

function PlayerInfo() {

    const [album] = useState([
        {
          Album: "Saved By the Bell",
          title: "So Badly Freestyle",
          artist: "Phlatt",
          image: "./images/gabe.jpg",
          music: "./music/bensound-dubstep.mp3",
        },
        {
          Album: "Saved By the Bell",
          title: "Can't take a joke Freestyle",
          artist: "Phlatt",
          image: "./images/glorgio.jpg",
          music: "./music/bensound-funnysong.mp3",
        },
        {
          Album: "Saved By the Bell",
          title: "Hit It On One",
          artist: "Phlatt",
          image: "./images/PhlattAlbumArt.jpg",
          music: "",
        },
      ]);
      
    
      const [songs] = useState([
    
        {
          Album: "Saved By the Bell",
          title: "Catch My Fade",
          artist: "Phlatt",
          image: "./images/gabe.jpg",
          music: "./music/RENAE_-_Glow_in_the_Dark__Scorpio_.mp3",
        },
        {
          Album: "Saved By the Bell",
          title: "Can't take a joke Freestyle",
          artist: "Phlatt",
          image: "./images/glorgio.jpg",
          music: "./music/RENAE_-_Heart_of_a_Lion__Leo_.mp3",
        },
        {
          Album: "Saved By the Bell",
          title: "Stallin",
          artist: "Phlatt",
          image: "./images/jacob.jpg",
          music: "",
        },
      ]);
      
    
      const [currentSongIndex, setCurrentSongIndex] = useState(0);
      const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
    
      //When currentSongIndex changes, this nextSongIndex function will run.
      useEffect(() => {
        setNextSongIndex(() => {
          if (currentSongIndex + 1 > songs.length - 1){
            return 0;
          } else {
            return (currentSongIndex + 1);
          }
        });
        
      }, [currentSongIndex])
    


    return (
        <div>
      <Player 
      currentSongIndex = {currentSongIndex} 
      setCurrentSongIndex = {setCurrentSongIndex}
      nextSongIndex = {nextSongIndex}
      songs = {songs} 
      album = {album} />
      
    </div>
    )
}

export default PlayerInfo
