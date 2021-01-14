import React from 'react'
import {useState, useEffect, useRef} from 'react'

function ListUI(props) {
    //gives reference to audioEl
    const audioEl = useRef(null);
    //is playing set to false so music doesnt play when the site loads up.
    let [isPlaying, setIsPlaying] = useState(false)

    function Play(){
        //props.newSong(true, index)
        props.setIsPlaying(!props.isPlaying)
    }

    
    
    return (
        <div className={props.classId}>
            <h3>Album: {props.songs[0].Album}</h3>
            <ol className='innerlist' >
                
                {props.songs.map((song, index) => (
                    <li className='songlist' key={song.id} onClick={() => {props.setPick(props.pick);props.newSong(true, index)}}>{song.title}</li>
                ))}
                
            </ol>
        </div>
    )
}

export default ListUI
