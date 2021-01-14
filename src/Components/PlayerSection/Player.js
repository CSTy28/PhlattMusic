import React from 'react'
import {useState, useEffect, useRef} from 'react'
import Details from './Details'
import Controls from './Controls'
import ListUI from './ListUI'


function Player(props) {
    //gives reference to audioElement in audio src tag
    const audioEl = useRef(null);
    
    
    

    //is playing set to false so music doesnt play when the site loads up.
    let [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        }
        else {
            audioEl.current.pause();
        }
    })

    //pick allows ListUI.js to change music list for playback
    let [pick, setPick] = useState(0)
    var songs

    if (pick === 0){
        songs = props.songs;
    }
    else if (pick === 1){
        songs = props.album;
    }


    //When using Audio controls the current index moves to next or previous song on a click
    const skipSong = (forwards = true) => {
        if (forwards){
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp ++

                if (temp > props.songs.length -1){
                    temp = 0;
                }
                return temp;
            });
        }
        else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp --;

                if (temp < 0){
                    temp = props.songs.length - 1;
                }
                return temp;
            })
            

        }
        
    }
    //changes song index to current index of clicked song for audio playback
    const newSong = (chosen = true, index) => {
        if (chosen){
            props.setCurrentSongIndex(() => {
                return index;
            });setIsPlaying(isPlaying = true)
        }
    }

    //begins animations for this section
    function scroll (){
        console.log(window.scrollY)
        if (window.scrollY > 300){
            document.querySelector('.c-player').classList.add('active');
            
          }

        if (window.scrollY > 557){
          var albums = document.querySelectorAll('.c-listgroups')
          albums.forEach(albumitem => albumitem.classList.add('active'))
        }
      }
    
        window.addEventListener('scroll', scroll)


    return (
        <section className='musicSection' id='music' /*style={{backgroundImage: `url(./images/brickwall.jpg)`, backgroundSize: `cover`}}*/>
            <div className='c-player' >
                <h3>Playing Now</h3>
                <audio src={songs[props.currentSongIndex].music} ref={audioEl}></audio>
                {/*need specific song for details section*/}
                <Details song={songs[props.currentSongIndex]} />
                <Controls isPlaying = {isPlaying} setIsPlaying={setIsPlaying} skipSong={skipSong}/>
                <p>Next Up: {songs[props.nextSongIndex].title} by {songs[props.nextSongIndex].artist}</p>
            </div>
            {/* UI for clickable songs list */}
            <div >
                <ul className='c-listUI'>

                    <ListUI classId = {'c-listgroups c-listgroup1'} pick = {0} setPick = {setPick} newSong={newSong} songs={props.songs} isPlaying = {isPlaying} setIsPlaying={setIsPlaying} />
                    <ListUI classId = {'c-listgroups c-listgroup2'} pick = {1} setPick = {setPick} newSong={newSong} songs={props.album} isPlaying = {isPlaying} setIsPlaying={setIsPlaying} />
                    
                    
                </ul>
                
            </div>
            

        </section>
    )
}

export default Player
